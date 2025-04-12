import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";

export default function Hero() {
    return (
        <Container className="main-cornered-containers-dark mt-5">
          <Row>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <img
                src="/assets/picture/profile.jpeg"
                alt="profile"
                className="img-fluid rounded-5 p-4"
                style={{transition: "transform 0.3s ease"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) rotate(1.5deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                }}
              />
            </Col >
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Stack
                direction="vertical"
                gap={4}
                className="d-flex flex-column justify-content-center align-items-center p-m-5"
              >
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
                  style={{
                    color: "black",
                    backgroundImage: "linear-gradient(90deg, orange, yellow)",
                    transition: "background 0.3s ease, color 0.7s ease, box-shadow 0.3s ease"
                  }}
                  className="border-0 px-5 py-3 rounded-4"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(45deg, blue, violet)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.boxShadow = "0 0 20px 5px gray";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(90deg, orange, yellow)";
                    e.currentTarget.style.color = "black";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => {
                    const section = document.getElementById("email-section");
                    if (section) {
                      section.scrollIntoView({behavior: "smooth"});
                    }
                  }}
                >
                  <i className="bi bi-lightning-fill me-2"></i>
                  Let's Talk
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
    )
}