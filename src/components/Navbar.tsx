import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.tsx";
import {NavLink} from "react-router-dom";

export default function NavigationBar() {
    const { theme, toggleTheme, getStyle } = useTheme();

    return (
        <Navbar expand="lg" className={theme === "light" ? "bg-light" :"bg-gray"}  variant={theme === "light" ? "light" :"dark"} fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} className={getStyle.text} to="/">
                    <i className={`bi bi-rocket-takeoff-fill bg-pr ${getStyle.rocketColor}`} style={{marginRight: "8px"}}></i>MP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content" className="justify-content-end">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link className={getStyle.text} href="TODO">Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {/*This is all navlinks should look like: */}
                            <Nav.Link as={NavLink} className={getStyle.text} to="about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={getStyle.text} href="home#projects">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={getStyle.text} href="contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                              variant={getStyle.themeVariant}
                              onClick={toggleTheme}
                              className="ms-lg-4">
                                <i className={getStyle.themeIcon}></i>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}