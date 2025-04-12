import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-bootstrap'
import { useTheme } from "./components/ThemeSetter.js";
import {useEffect} from "react";
import NavigationBar from "./components/Navbar.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import {Container} from "react-bootstrap";
import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";


function App() {
    const { theme } = useTheme();

    useEffect(() => {
        // Access the root element and set the background color
        const root = document.getElementById("root");
        const body = document.body
        if (root) {
            if (theme === "light") {
                root.style.backgroundColor = "#ffffff";
                body.style.backgroundColor = "#ffffff";
            } else {
                root.style.backgroundColor = "#000000";
                body.style.backgroundColor = "#000000";
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
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Container>

            <SiteFooter />
        </div>
    </BrowserRouter>
  )
}

export default App
