export default interface Commits {
  repoName: string,
  commitMessage: string,
  date: Date,
  dateString: string,
  branch: string,
  commitUrl: string,
  repoUrl: string,
  languages: string[]
}