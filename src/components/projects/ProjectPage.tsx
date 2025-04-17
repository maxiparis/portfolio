import {useTheme} from "../ThemeSetter.tsx";
import {Carousel, Col, Container, Row, Stack} from "react-bootstrap";
import {CardWithBackgroundAndTitle} from "./CardWithBackgroundAndTitle.tsx";
export interface ProjectPageProps {
  title: string,
  pictures: string[],
  features: JSX.Element[],
  teachStack: JSX.Element[],
  description: string,
  buttons: JSX.Element[]
}

export default function ProjectPage(props: ProjectPageProps){
  const { theme, getStyle } = useTheme()

  function carouselItems(picturesSources: string[]) {
    {
      return picturesSources.map(picture => {
        return (
          <Carousel.Item key={picture}>
            <img
              className="img-fluid px-5 pb-5 rounded-3"
              src={picture}
              alt="First slide"
            />
          </Carousel.Item>
        )
      })
    }
  }

  return (
    <Container className="my-5">
      <Stack direction={"vertical"} gap={4}className="justify-content-center">
        <div>
          <h1
            className="text-center"
            style={{color: getStyle.primaryColor}}
          >
            {props.title}
          </h1>
          <h5 className="text-secondary text-center">{props.description}</h5>
        </div>
        <div className="d-flex flex-md-row flex-column justify-content-center gap-3">
          {props.buttons}
        </div>
      </Stack>

      <Row className="mt-5">
        {/*Images*/}
        <Col lg={5} xs={12}>
          <Carousel variant={theme == "dark" ? "light" : "dark"}>
            {carouselItems(props.pictures)}
          </Carousel>
        </Col>

        {/* Key Features, Tech Stack & Tools, Description */}
        <Col lg={7} xs={12} >
          <Stack gap={3}>
            <CardWithBackgroundAndTitle
              title={"Key Features"}
              children={props.features}
            />

            <CardWithBackgroundAndTitle
              title={"Tech Stack & Tools"}
              children={props.teachStack}
            />
          </Stack>

        </Col>
      </Row>
    </Container>
  )
}
