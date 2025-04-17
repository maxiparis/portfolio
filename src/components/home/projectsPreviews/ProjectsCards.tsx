import {useTheme} from "../../ThemeSetter.tsx";
import {Button, Col, Container, Row} from "react-bootstrap";
import {ProjectPreview} from "./ProjectsList.tsx";
import {useNavigate} from "react-router-dom";

export function ProjectCard({project}: {project: ProjectPreview}) {
  const { getStyle } = useTheme();
  const navigate = useNavigate()

  return (
    <Container
      className={`${getStyle.contactFormBackground} text-white pt-3 pb-1 rounded-3`}
    >
      <Row className="m-3 d-flex justify-content-center align-items-center">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded-5"
            style={{maxHeight: '600px'}}
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-around align-items-center gap-3">
          <h3 className={`${getStyle.text} pb-md-3 pb-sm-0 pt-md-0 pt-4`}>{project.title}</h3>
          <p className={`${getStyle.text}`}>{project.description}</p>
          <Button
            className={`${getStyle.textInversed} no-border w-75 shadow-lg`}
            style={{backgroundColor: getStyle.primaryColor}}
            onClick={() => {
              navigate(project.link)
            }}
          >
            View Project
          </Button>
        </Col>
      </Row>

    </Container>
  );
}