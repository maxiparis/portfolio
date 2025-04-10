import express = require("express");
import axios from "axios";

import { config } from 'dotenv';
config()

// @ts-ignore
import cors = require('cors');

const app = express();
const PORT = 3001;

// Serve up the static content
app.use(cors());
//make sure to parse the body from json
app.use(express.json());
app.use(express.static('dist'));


const apiRouter = express.Router();
app.use('/api', apiRouter);

/**
 * Contacts the EmailJS api to send the email.
 *
 * Expecting a body like:
 * {
 *   name: string,
 *   email: string,
 *   message: string,
 * }
 *
 */
apiRouter.post('/sendemail', async (req, res) => {
  let {name, email, message} = req.body;
  if (!name || !email || !message) {
    res.status(400).json({message: 'Missing required fields'})
    return
  }

  let service_id = process.env.EMAILJS_SERVICE_ID
  let template_id = process.env.EMAILJS_TEMPLATE_ID
  let public_key = process.env.EMAILJS_PUBLIC_KEY

  if (!service_id || !template_id || !public_key) {
    console.log('Missing required env variables')
    console.log(service_id, template_id, public_key)
    res.status(500).json({message: 'Missing required env variables'})
    return
  }

  try {
    let data = {
      service_id,
      template_id,
      user_id: public_key,
      template_params: {
        name,
        message,
        email,
      }
    }

    await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    res.status(200).send({ message: 'Email sent' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error sending email' })
  }
})

apiRouter.get('/commits', async (req, res) => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error('Missing GITHUB_TOKEN in environment variables.');
    res.status(500).json({ message: 'Server configuration issue: Missing GITHUB_TOKEN' });
    return
  }

  const graphqlQuery = {
    query: `{
        viewer {
          repositories(first: 50, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
            nodes {
              name
              url
              refs(first: 5, refPrefix: "refs/heads/") {  # Fetches up to 5 branches
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
      }
  `
  };

  try {
    const response = await axios.post('https://api.github.com/graphql', graphqlQuery, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const repos = response.data.data.viewer.repositories.nodes;
    let commitsArray: {
      repoName: string,
      commitMessage: string,
      date: Date,
      dateString: string,
      branch: string,
      commitUrl: string,
      repoUrl: string,
    }[] = []
    for (const repo of repos) {
      for (const commits of repo.refs.nodes) {
        const commit = commits.target.history.nodes[0]
        commitsArray.push({
          repoName: repo.name,
          branch: commits.name,
          commitMessage: commit.message,
          date: new Date(commit.committedDate),
          dateString: new Date(commit.committedDate).toLocaleString(),
          commitUrl: commit.url,
          repoUrl: repo.url,
        })
      }
    }

    commitsArray.sort((a, b) => {
      return b.date.getTime() - a.date.getTime()
    })

    res.status(200).json(commitsArray.slice(0, 10)); //send the first 10 commits
    return
  } catch (error) {
    // @ts-ignore
    console.error('Error fetching data from GitHub GraphQL API:', error.response?.data || error.message);
    // @ts-ignore
    res.status(500).json({ message: 'Failed to fetch data from GitHub API', error: error.response?.data || error.message });
    return
  }
})





// ------------------------------------------
// ---------------- Start the server ----------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});