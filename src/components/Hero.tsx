import {Col, Container, Row} from "react-bootstrap";
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
            <Col>
              <h1>Hi! My name is</h1>
              <h1>Maximiliano Paris</h1>
              <h4>I am a Software Engineer.</h4>
            </Col>
          </Row>
        </Container>
    )
}