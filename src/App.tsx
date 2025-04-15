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
import ProjectPage, {ProjectPageProps} from "./components/projects/ProjectPage.tsx";
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

    const templateProject: ProjectPageProps = {
        title: 'FocusFlow',
        subtitle: 'Helping individuals to focus on their goals',
        pictures: ["/assets/picture/example3.png", "/assets/picture/example3.png", "/assets/picture/example3.png"],
        features: [
            "FocusFlow is designed to empower individuals to stay on track with their personal and professional goals.",
            "It combines advanced tools like focus timers, goal tracking, and performance analytics, all wrapped in an intuitive interface.",
            "Seamlessly integrate your tasks with your calendar, switch between themes, and analyze your productivity to achieve more every day."
        ],
        teachStack: [
          "Swift",
          "SwiftUI",
          "UsersDefaults",
          "Architecture: MVVM"
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore' +
          ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ' +
          'ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
          'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ' +
          'id est laborum.',
        buttons: []
    }

    return (
    <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar />
            <Container
              className="space-to-navbar body d-flex flex-column flex-grow-1 justify-content-top align-items-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/projects">
                        <Route path="contributions" element={<div>Contributions Component</div>}/>
                        <Route path="conosur" element={<div>Conosur Component</div>}/>
                        <Route path="focusflow" element={ProjectPage(templateProject)}/>
                        <Route path="improvify" element={<div>Improvify Component</div>}/>
                        <Route path="learnspanish" element={<div>Learn Spanish Component</div>}/>
                    </Route>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Container>

            <SiteFooter />
        </div>
    </BrowserRouter>
  )
}

export default App
