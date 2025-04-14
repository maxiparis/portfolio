import {useTheme} from "../ThemeSetter.tsx";
import {Col, Row} from "react-bootstrap";
import {LanguageStack} from "./LanguageStack.tsx";

export interface SkillsRowProps {
  language: string,
  percentage: number,
}

export function SkillsRow({language, percentage}: SkillsRowProps) {
  const { getStyle } = useTheme();

  return (
    <Row>
      <Col xs={2} className="pt-3">
        <LanguageStack language={language} />
      </Col>
      <Col xs={10} className="d-flex flex-column justify-content-center">
        <div className="progress" style={{backgroundColor: getStyle.background}}>
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
