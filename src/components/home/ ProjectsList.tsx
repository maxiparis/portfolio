import {Col, Container, Row, Stack} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";

interface ProjectPreview {
  title: string,
  description: string,
  link: string,
  image: string,
}

export function ProjectsList() {
  const projects: ProjectPreview[] = [
    {
      title: "Sample Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "http://example.com",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-17-iphone-15-pro-close-app-blue-dot-animation.gif",
    },
    {
      title: "Sample Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "http://example.com",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-17-iphone-15-pro-close-app-blue-dot-animation.gif",
    },
    {
      title: "Sample Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "http://example.com",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-17-iphone-15-pro-close-app-blue-dot-animation.gif",
    }
  ];
  return (
    <Stack gap={5}>
      {projects.map((project) => (
        ProjectCard({project})
      ))}
    </Stack>
  );
}

export function ProjectCard({project}: {project: ProjectPreview}) {
  const { getStyle } = useTheme();
  
  return (
    <Container 
      className={`${getStyle.contactFormBackground} text-white pt-3 pb-1 rounded-3`}
    >
      <Row className="m-3 d-flex justify-content-center align-items-center">
        <Col md={6}>
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded"
            style={{maxHeight: '600px'}}
          />
        </Col>
        <Col md={6}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" className="btn btn-primary">
            View Project
          </a>
        </Col>
      </Row>
      
    </Container>
  );
}
