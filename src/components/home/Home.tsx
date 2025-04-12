import Hero from "./Hero.tsx";
import ContactForm from "./ContactForm.tsx";
import {useTheme} from "../ThemeSetter.tsx";
import {LatestCommits} from "./LatestCommits.tsx";
import {HomeObject} from "./HomeObject.tsx";
import {ProjectsList} from "./ ProjectsList.tsx";
import {SkillsList} from "./SkillsList.tsx";

export default function Home() {
  const { getStyle } = useTheme();
  return (
   <>
     <Hero />
     <HomeObject title="Check Out My Recent Projects" children={<ProjectsList />} />
     <HomeObject title="My Expertise and Skillset" children={<SkillsList/>}/>
     <HomeObject title="What I Have Been Up To" children={<LatestCommits />} />
     <HomeObject title="Let's Connect" children={<ContactForm />} />
   </>
  )
}
