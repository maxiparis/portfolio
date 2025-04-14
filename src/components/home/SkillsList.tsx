import {Col, ProgressBar, Row, Stack} from "react-bootstrap";
import {LanguageStack} from "./LanguageStack.tsx";

export function SkillsList() {

  return (
    <Stack className={"mt-5"} gap={3}>
      <SkillsRow language={"Swift"} percentage={90}/>
    </Stack>
  );
}

export interface SkillsRowProps {
  language: string,
  percentage: number,
}

export function SkillsRow({language, percentage}: SkillsRowProps) {
  return (
    <Row>
      <Col xs={2}>
        <LanguageStack language={language} />
      </Col>
      <Col xs={10}>
        <div className="progress" style={{backgroundColor: '#000000'}}>
          {/*@ts-ignore*/}
          <div
            className="progress-bar bg-success progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow={ percentage }
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: `${percentage}%`}}
          />
        </div>
      </Col>
    </Row>
  );
}
