import './App.css'
import {BrowserRouter} from "react-router-dom";
import 'react-bootstrap'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { useTheme } from "./components/ThemeSetter.js";
import {useEffect} from "react";
import NavigationBar from "./components/Navbar.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import Hero from "./components/Hero.tsx";


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
    }, [theme])



    return (
    <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar />
            <Hero />
            <SiteFooter />
        </div>

    </BrowserRouter>
  )
}

export default App
