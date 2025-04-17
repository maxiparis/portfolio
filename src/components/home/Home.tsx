import Hero from "./Hero.tsx";
import ContactForm from "./ContactForm.tsx";
import {useTheme} from "../ThemeSetter.tsx";
import {LatestCommits} from "./commits/LatestCommits.tsx";
import {HomeObject} from "./HomeObject.tsx";
import {ProjectsList} from "./projectsPreviews/ProjectsList.tsx";
import {SkillsList} from "./skills/SkillsList.tsx";

export default function Home() {
  return (
   <>
     <Hero />
     <HomeObject title="Check Out My Recent Projects and Contributions" children={<ProjectsList />} />
     <HomeObject title="My Expertise and Skillset" children={<SkillsList/>}/>
     <HomeObject title="What I Have Been Up To" children={<LatestCommits />} />
     <HomeObject title="Let's Connect" children={<ContactForm />} />
   </>
  )
}
