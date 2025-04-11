import {useEffect, useState} from "react";
import Commits from "../../../service/types/Commits.ts";
import axios from "axios";
import { useTheme } from "../ThemeSetter.tsx";

type LoadingState = "loading" | "success" | "error";

export function LatestCommits() {
  const { getStyle } = useTheme();
  const [commits, setCommits] = useState<Commits[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>("loading");

  // As soon as I load the page, load the commits.
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    try {
      //call the backend
      let response = await axios.get("/api/commits");
      setCommits(response.data);
      setLoadingState("success");
    } catch (error) {
      setLoadingState("error");
    }
  }

  function renderCommits(commits: Commits[]) {
    return commits.map((commit, index) => (
      <p className={ getStyle.text }  key={index}>{commit.commitMessage}</p>
    ));
  }

  return (
    <>
      {loadingState === "success" && renderCommits(commits)}
      {loadingState === "loading" && <p>Loading...</p>}
      {loadingState === "error" && <p>Failed to load commits.</p>}
    </>
  );
}
