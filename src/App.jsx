import './App.css'
import {BrowserRouter} from "react-router-dom";
import 'react-bootstrap'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { useTheme } from "./ThemeSetter.jsx";
import {useEffect} from "react";


function App() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // Access the root element and set the background color
        const root = document.getElementById("root");
        const body = document.body
        if (root) {
            if (theme === "light") {
                root.style.backgroundColor = "#ffffff"; // Set the background color you want
                body.style.backgroundColor = "#ffffff"; // Set the background color you want
            } else {
                root.style.backgroundColor = "#000000"; // Set the background color you want
                body.style.backgroundColor = "#000000"; // Set the background color you want
            }
        }
    }, [theme]) // Empty array ensures this runs once when the component mounts



    return (
    <BrowserRouter >
        <Navbar expand="lg" className={theme === "light" ? "bg-light" :"bg-gray"}  variant={theme === "light" ? "light" :"dark"} fixed="top">
            <Container>
                <Navbar.Brand className={theme === "light" ? "text-dark" : "text-white"} href="#home">MP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content" className="justify-content-end">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={theme === "light" ? "text-dark" : "text-white"} href="#home">Home</Nav.Link>
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

        <Container className="mt-5">
                <h1 className={ theme === "light" ? "text-black" : "text-white" } >Hello World!</h1>
        </Container>

    </BrowserRouter>
  )
}

export default App
