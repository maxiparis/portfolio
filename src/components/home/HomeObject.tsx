import {useTheme} from "../ThemeSetter.tsx";
import {Container} from "react-bootstrap";

export interface HomeObjectProps {
  title: string,
  children: JSX.Element,
}

export function HomeObject({title, children}: HomeObjectProps) {
  const { getStyle } = useTheme();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
      <h2 className={getStyle.text}>{title}</h2>

      {children}

    </Container>
  );
}
