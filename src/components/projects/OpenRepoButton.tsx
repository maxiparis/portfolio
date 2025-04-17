import {Button} from "react-bootstrap";

export function OpenRepoButton({url}: {url: string}) {
  return (
    <Button
      onClick={
        () => {
          window.open(url, '_blank')
        }
      }
    >
      <i className="bi bi-github" style={{marginRight: '8px'}}></i>

      See GitHub Repo
    </Button>
  )
}
