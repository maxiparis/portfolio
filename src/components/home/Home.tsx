import Hero from "./Hero.tsx";
import {Container} from "react-bootstrap";
import ContactForm from "./ContactForm.tsx";
import {useTheme} from "../ThemeSetter.tsx";
import {LatestCommits} from "./LatestCommits.tsx";

export default function Home() {
  const { getStyle } = useTheme();
  return (
   <>
     <Hero />

     <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
       <h2 className={getStyle.text}>What I have been up to</h2>
       <LatestCommits />
     </Container>

     <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
       <h2 className={getStyle.text}>Let's get in touch</h2>
       <ContactForm />
     </Container>
   </>
  )
}
