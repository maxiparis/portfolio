import {useTheme} from "../ThemeSetter.tsx";

export default function Contact(){
  const { getStyle } = useTheme()

  return <h1 className={getStyle.text}>Contact</h1>
};