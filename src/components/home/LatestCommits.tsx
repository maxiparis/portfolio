import {useEffect, useState} from "react";
import Commits from "../../../service/types/Commits.ts";
import axios from "axios";
import { useTheme } from "../ThemeSetter.tsx";
import {Spinner} from "react-bootstrap";

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
      // Call the backend
      let response = await axios.get("/api/commits");

      if (response.status === 200) {
        setCommits(response.data);
        setLoadingState("success");
      } else {
        setLoadingState("error");
      }
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
      {loadingState === "loading" && <Spinner className={`mt-5 ${getStyle.text}`}/>}
      {loadingState === "error" && <p>Failed to load commits.</p>}
    </>
  );
}
