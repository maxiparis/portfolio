import {Component} from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.jsx";

export default function NavigationBar() {
    const { theme, toggleTheme } = useTheme();


    return (
        <Navbar expand="lg" className={theme === "light" ? "bg-light" :"bg-gray"}  variant={theme === "light" ? "light" :"dark"} fixed="top">
            <Container>
                <Navbar.Brand className={theme === "light" ? "text-dark" : "text-white"} href="#home">MP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content" className="justify-content-end">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button onClick={toggleTheme}>
                                {theme === "light" ? "Dark" : "Light"}
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}