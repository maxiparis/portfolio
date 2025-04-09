import {useTheme} from "../ThemeSetter.tsx";

export default function Projects(){
  const { getStyle } = useTheme()
  return <h1 className={getStyle.text}>Projects</h1>
};