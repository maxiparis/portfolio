import {Container} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.tsx";

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container
            className="space-to-navbar body d-flex flex-column flex-grow-1 justify-content-top align-items-center">
            <Container className="main-cornered-containers-dark mt-5">
                <h1>Hi! My name is</h1>
                <h1>Maximiliano Paris</h1>
                <h4>I am a Software Engineer.</h4>
            </Container>
        </Container>
    )
}