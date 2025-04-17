import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";

export function BYUContributions() {
  const { getStyle } = useTheme()
  return (
    <Container className="my-5">
      <Stack direction={"vertical"} gap={4}className="justify-content-center">
        <div>
          <h1
            className="text-center"
            style={{color: getStyle.primaryColor}}
          >
            My Contributions to the BYU App
          </h1>
          <h5 className="text-secondary text-center">
            I joined Brigham Young University's Office of Information Technology in May 2024.
            I worked on the BYU iOS App, which is the official BYU app for students and faculty. It has many features, like a calendar,
            the students' schedule, the dining portal, testing information, Cougar Cash, BYU ID and more.
          </h5>
          <h5 className="text-secondary text-center">
            The app has <strong>4.7 stars</strong> on the App Store, and has over <strong>60,000 downloads.</strong>
          </h5>
          <h5 className="text-secondary text-center">
            Here are some of the things I have worked on that I am more excited about:
          </h5>

        </div>
        <div className="d-flex flex-md-row flex-column justify-content-center gap-3">
          <Button
            className="border-0 px-5 py-3 rounded-4"
            onClick={() => {
              window.open("https://apps.apple.com/us/app/byu/id468518180", "_blank");
            }}
          >
            See on the App Store
          </Button>
        </div>
      </Stack>

      {/* Home Screen */}
      <h2 className={`${getStyle.text} text-center mt-5`}>Home Screen</h2>
      <h5 className="text-secondary text-center">
        I contributed to the overall development of the Home Screen. I worked on the tools list,
        the functionality behind several Widgets (My Classes, My Active Vehicle, Cougar Cash), and
        helped fix several bugs.
      </h5>
      <Row>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/homescreen.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/homescreen_dark.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
      </Row>

      {/* Intro Tour */}
      <h2 className={`${getStyle.text} text-center mt-5`}>Redesign Intro Tour</h2>
      <h5 className="text-secondary text-center">
        One of the projects I worked on independently was the redesigned intro tour. We overhauled the Home Screen to
        utilize SwiftUI instead of UIKit, and this intro tour was created to guide users through the new Home Screen features,
        including Widgets, Tools, and a search functionality.
      </h5>

      <h5 className="text-secondary text-center mt-5">
        Here are some screenshots of the Intro Tour:
      </h5>

      <Row>
        <Col md={4}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/tour01.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={4}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/tour02.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={4}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/tour03.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
      </Row>

      {/* Search Feature */}
      <h2 className={`${getStyle.text} text-center mt-5`}>Search Feature on the Home Screen</h2>
      <h5 className="text-secondary text-center">
        I independently implemented the search feature for the Home Screen. This feature includes a simple search bar
        that filters between Widgets and Tools. Additionally, we introduced a recent searches list, allowing users to
        quickly access the Tools or Widgets they have previously opened or interacted with. The search feature was developed
        using SwiftUI, with recent searches being saved through UserDefaults.
      </h5>
      <Row>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/search01.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/search02.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
      </Row>

      {/* Add Widgets/Tools */}
      <h2 className={`${getStyle.text} text-center mt-5`}>Add Widgets and Tools</h2>
      <h5 className="text-secondary text-center">
        One of the projects I contributed to was enabling users to customize their Home Screen by adding Widgets and
        Tools. The Edit button, located next to the Widgets or Tools section, opens a Sheet where users can select
        items to add to their Home Screen with a simple tap. These views are organized into categories for added and
        unadded items, making it easy for users to identify which have already been included.
      </h5>
      <Row>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/tools.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/widgets.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
      </Row>

      {/* BYU Info and IT Support */}
      <h2 className={`${getStyle.text} text-center mt-5`}>BYU Info and IT Support</h2>
      <h5 className="text-secondary text-center">
        I worked on the BYU Info and IT Support pages, which are the pages that users can communicate with BYU Operators
        or IT Support.
      </h5>
      <Row>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/info.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
        <Col md={6}>
          <img
            className="img-fluid rounded-5 p-4"
            src="/assets/picture/byu/itsupport.png"
            alt="BYU Contributions"
            style={{maxHeight: '1000px'}}
          />
        </Col>
      </Row>
    </Container>
  );
}
