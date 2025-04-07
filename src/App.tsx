import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-bootstrap'
import { useTheme } from "./components/ThemeSetter.js";
import {useEffect} from "react";
import NavigationBar from "./components/Navbar.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import Hero from "./components/Hero.tsx";
import {Container} from "react-bootstrap";

function About() {
    const { theme } = useTheme();
    // @ts-ignore
    return (
      <h1 className={theme === "light" ? "text-dark" : "text-white"}>ABOUT</h1>
    )
}
function App() {
    const { theme } = useTheme();

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
            <Container
              className="space-to-navbar body d-flex flex-column flex-grow-1 justify-content-top align-items-center">
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
            </Routes>
            </Container>

            <SiteFooter />
        </div>
    </BrowserRouter>
  )
}

export default App
