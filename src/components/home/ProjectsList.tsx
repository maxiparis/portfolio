import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {useTheme} from "../ThemeSetter.tsx";
import {ProjectCard} from "./ProjectsCards.tsx";

export interface ProjectPreview {
  title: string,
  description: string,
  link: string,
  image: string,
}

export function ProjectsList() {
  const projects: ProjectPreview[] = [
    {
      title: "Cono Sur",
      description: "Discover an app showcasing delicious recipes from Chile, Argentina, Peru, and Uruguay. " +
        "Explore traditional dishes, learn about cultural flavors, and try your hand at preparing iconic " +
        "meals from these South American countries.",
      link: "http://example.com",
      image: "/assets/picture/recipes.png",
    },
    {
      title: "FocusFlow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "http://example.com",
      image: "/assets/picture/focusflow.png",
    },
    {
      title: "Improvify",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
      link: "http://example.com",
      image: "/assets/picture/improvify.png",
    },
    {
      title: "Learn Spanish",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
      link: "http://example.com",
      image: "/assets/picture/learnSpanish.png",
    }
  ];
  return (
    <Stack gap={5}>
      {projects.map((project) => (
        ProjectCard({project})
      ))}
    </Stack>
  );
}
