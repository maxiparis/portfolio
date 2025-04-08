import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.tsx";

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container className="main-cornered-containers-dark mt-5">
          <Row>
            <Col>
              <img
                src="/assets/picture/profile.jpeg"
                alt="profile"
                className="img-fluid rounded-5 p-4"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <Stack direction="vertical" gap={4} className="d-flex flex-column justify-content-center align-items-center p-5">
                  <div>
                    <h1 className="text-center">Hi! 👋 My name is </h1>
                    <h1 className="text-center">Maximiliano Paris </h1>
                  </div>
                <h4 className="text-center">I build iOS apps that enhance and simplify life.</h4>

                
                <Stack direction="horizontal" gap={4} className="social-icons-hero d-flex flex-row justify-content-center align-items-center">
                  <a
                    href="https://github.com/maxiparis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maximiliano-paris"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </Stack>

                <Button
                  style={{backgroundColor: "orange", transition: "background-color 0.3s ease, color 0.3s ease"}}
                  className="text-black border-0 px-5 py-3 rounded-4"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffaa33";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "orange";
                    e.currentTarget.style.color = "black";
                  }}
                >
                  <i className="bi bi-lightning-fill me-2"></i>
                  Call To Action
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
    )
}