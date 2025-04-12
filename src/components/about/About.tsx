import {useTheme} from "../ThemeSetter.tsx";

export default function About() {
  const { getStyle } = useTheme();
  return (
    <h1 className={getStyle.text}>About</h1>
  )
}