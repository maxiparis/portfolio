import './App.css'
import {BrowserRouter} from "react-router-dom";
import 'react-bootstrap'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { useTheme } from "./components/ThemeSetter.jsx";
import {useEffect} from "react";
import NavigationBar from "./components/Navbar.jsx";


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
        <NavigationBar />

        <Container className="mt-5">
                <h1 className={ theme === "light" ? "text-black" : "text-white" } >Hello World!</h1>
        </Container>

    </BrowserRouter>
  )
}

export default App
