import {useTheme} from "../ThemeSetter.tsx";
import {Carousel, Col, Container, Row} from "react-bootstrap";
export interface ProjectPageProps {
  title: string,
  subtitle: string,
  pictures: string[],
  features: string[],
  teachStack: string[],
  description: string,
  buttons: JSX.Element[]
}

export default function ProjectPage(props: ProjectPageProps){
  const { theme, getStyle } = useTheme()

  function carouselItems(picturesSources: string[]) {
    return picturesSources.map(picture => {
      return (
        <Carousel.Item key={picture}>
          <img
            className="img-fluid px-5 pb-5"
            src={picture}
            alt="First slide"
          />
        </Carousel.Item>

      )
    })
  }

  return (
    <>
      <h1 className={getStyle.text}>{props.title}</h1>
      <h4 className="text-secondary">{props.subtitle}</h4>

      <Row className="mt-5">
        <Col lg={5} xs={12}>
          <Carousel variant={theme == "dark" ? "light" : "dark"}>
            {carouselItems(props.pictures)}
          </Carousel>
        </Col>

        <Col lg={7} xs={12}>
          <p>{props.description}</p>
        </Col>
      </Row>
    </>
  )
}


