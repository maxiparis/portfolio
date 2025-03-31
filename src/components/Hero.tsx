import {Container} from "react-bootstrap";
import {useTheme} from "./ThemeSetter.tsx";

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Container className="main-cornered-containers-dark mt-5">
            <h1>Hi! My name is</h1>
            <h1>Maximiliano Paris</h1>
            <h4>I am a Software Engineer.</h4>
        </Container>
    )
}