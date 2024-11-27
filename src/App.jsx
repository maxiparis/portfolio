import './App.css'
import {BrowserRouter} from "react-router-dom";
import 'react-bootstrap'
import {Container, Nav, Navbar} from "react-bootstrap";
import { useTheme } from "./ThemeSetter.jsx";
import {useEffect} from "react";


function App() {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // Access the root element and set the background color
        const root = document.getElementById("root");
        if (root) {
            if (theme === "light") {
                root.style.backgroundColor = "#ffffff"; // Set the background color you want
            } else {
                root.style.backgroundColor = "#000000"; // Set the background color you want
            }
        }
    }, [theme]) // Empty array ensures this runs once when the component mounts



    return (
    <BrowserRouter >
        <Navbar expand="lg" className="bg-gray" fixed="top">
            <Container>
                <Navbar.Brand className={"text-white"} href="#home">MP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content" className="justify-content-end">
                    <Nav >
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container className="mt-5">
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
            { theme === "light" ? (
                <h1 className="text-black">Hello World!</h1>
            ):(
                <h1 className="text-white">Hello World!</h1>
            )

            }
        </Container>

    </BrowserRouter>
  )
}

export default App
