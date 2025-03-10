import {Container} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function SiteFooter() {
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="site-footer">
            <div className={theme === "light" ? "text-black bg-light" : "text-white bg-gray"}>
                <Container className="d-flex flex-row justify-content-between align-items-center py-3">
                    <h6>© 2024 Maximiliano Paris</h6>
                    <div className="social-icons d-flex">
                        <a
                            href="https://github.com/maxiparis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                        >
                            <i className="bi bi-github" style={{fontSize: '30px'}}></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/maximiliano-paris/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin" style={{fontSize: '30px'}}></i>
                        </a>
                    </div>
                </Container>
            </div>
        </footer>
    )
}