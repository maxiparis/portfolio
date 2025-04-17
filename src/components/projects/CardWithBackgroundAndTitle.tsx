import {useTheme} from "../ThemeSetter.tsx";
import {Container} from "react-bootstrap";

interface CardWithBackgroundAndTitleProps {
  title: string,
  children: JSX.Element[],
}

export function CardWithBackgroundAndTitle({title, children}: CardWithBackgroundAndTitleProps) {
  const { getStyle } = useTheme();
  return (
    <Container className={`${getStyle.contactFormBackground} rounded-4 p-4`}>
      <h4 style={{color: getStyle.secondaryColor}}>{title}</h4>
      {children}
    </Container>
  );
}

