import Commits from "../../../service/types/Commits.ts";
import {Container, Row, Col, Stack} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";
import React from "react";
import {LanguageStack} from "./LanguageStack.tsx";

interface CommitCardProps {
  commit: Commits
}

export function CommitCard({ commit }: CommitCardProps) {
  const { getStyle } = useTheme();

  function getLanguageIconComponent(language: string): string | null {
    switch (language) {
      case "Swift":
        return "devicon-swift-plain colored"
      case "JavaScript":
        return "devicon-javascript-plain colored"
      case "TypeScript":
        return "devicon-typescript-plain colored"
      case "Java":
        return "devicon-java-plain colored"
      case "Shell":
        return "devicon-powershell-plain"
      case "CSS":
        return "devicon-css3-plain colored"
      case "HTML":
        return "devicon-html5-plain colored"
      case "Dockerfile":
        return "devicon-docker-plain colored"
      case "Lua":
        return "devicon-lua-plain"
      default:
        return "bi bi-question-circle"
    }
  }

  return (
    <Container className={`zoom-container ${getStyle.contactFormBackground} text-white pt-3 pb-1 rounded-3`}
    >
      <Row className="d-flex justify-content-between">
        <Col className="text-start">
          <h5 style={{color: getStyle.primaryColor}}>{`Repo Name:  `}
            <a
              className="text-reset"
              target="_blank"
              href={commit.repoUrl}
            >
              {commit.repoName}
            </a>
          </h5>
        </Col>
        <Col className="text-end">
          <p className={getStyle.text}>Branch: {commit.branch}</p>
        </Col>
      </Row>

      <Row>
        <h6 className={getStyle.text}>Commit Message: {commit.commitMessage.length > 100 ? `${commit.commitMessage.slice(0, 100)}...` : commit.commitMessage}</h6>
      </Row>

      <Row>
        <h6 className={getStyle.text}>Date: {commit.dateString}</h6>
      </Row>

      <Row>
        <h6 className={getStyle.text}>
          <a
            href={commit.commitUrl}
            target="_blank"
            className="text-decoration-none"
            style={{color: getStyle.primaryColor}}
          >
            View Commit
          </a>
        </h6>
      </Row>

      <Row className="d-flex justify-content-between">
        <Col md={6}>
          <h6 className={getStyle.text}>Tech Stack:</h6>
        </Col>
        <Col md={6}>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            {commit.languages.map((language, index) => (
              <>
                {getLanguageIconComponent(language) == null
                  ? <p className={index == 0 ? "ms-auto" : ""} key={index}>{language}</p>
                  : <LanguageStack devicon={getLanguageIconComponent(language)!} language={language} index={index} key={index} />
                }
              </>
            ))}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

