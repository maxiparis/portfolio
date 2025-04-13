import {Col, ProgressBar, Row, Stack} from "react-bootstrap";
import {LanguageStack} from "./LanguageStack.tsx";

export function SkillsList() {


  return (
    <Stack className={"mt-5"} gap={3}>
      <Row>
        <Col xs={2}>
          <LanguageStack devicon="devicon-swift-plain colored" language="Swift" index={3}/>
        </Col>
        <Col xs={10}>
          <div className="progress" style={{backgroundColor: '#000000'}}>
            {/*@ts-ignore*/}
            <div
              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: '83%'}}
            />
          </div>
        </Col>
      </Row>
    </Stack>
  );
}
