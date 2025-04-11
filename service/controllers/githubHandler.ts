import { Request, Response } from "express";
import axios from "axios";

export async function getCommitsHandler(req: Request, res: Response) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error("Missing GITHUB_TOKEN in environment variables.");
    res.status(500).json({ message: "Server configuration issue: Missing GITHUB_TOKEN" });
    return;
  }

  const languagesQuery = {
    query: `{
      viewer {
        repositories(first: 50, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
          nodes {
            name
            url
            languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                name
              }
            }
          }
        }
      }
    }`,
  };

  const commitsQuery = {
    query: `{
      viewer {
        repositories(first: 50, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
          nodes {
            name
            url
            refs(first: 5, refPrefix: "refs/heads/") {  
              nodes {
                name
                target {
                  ... on Commit {
                    history(first: 1) {
                      nodes {
                        message
                        committedDate
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
  };

  try {
    // Fetch language data
    const languagesResponse = await axios.post("https://api.github.com/graphql", languagesQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const languagesPerRepo = new Map<string, string[]>(
      languagesResponse.data.data.viewer.repositories.nodes.map((repo: any) => [
        repo.name,
        repo.languages.nodes.map((lang: { name: string }) => lang.name),
      ])
    );

    // Fetch commits data
    const commitsResponse = await axios.post("https://api.github.com/graphql", commitsQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const repos = commitsResponse.data.data.viewer.repositories.nodes;
    let commitsArray: {
      repoName: string,
      commitMessage: string,
      date: Date,
      dateString: string,
      branch: string,
      commitUrl: string,
      repoUrl: string,
      languages: string[]
    }[] = []
    commitsArray = repos.flatMap((repo: any) =>
      repo.refs.nodes.map((branch: any) => {
        const commit = branch.target.history.nodes[0];
        return {
          repoName: repo.name,
          branch: branch.name,
          commitMessage: commit.message,
          date: new Date(commit.committedDate),
          dateString: new Date(commit.committedDate).toLocaleString(),
          commitUrl: commit.url,
          repoUrl: repo.url,
          languages: languagesPerRepo.get(repo.name) || [],
        };
      })
    );

    commitsArray.sort((a, b) => b.date.getTime() - a.date.getTime());

    res.status(200).json(commitsArray.slice(0, 10));
  } catch (error) {
    console.error("Error fetching data from GitHub GraphQL API:", error);
    res.status(500).json({ message: "Failed to fetch data from GitHub API" });
  }
}