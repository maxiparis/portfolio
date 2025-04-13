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
      title: "BYU app",
      description: "At BYU, I develop and maintain iOS applications that improve the experience and accessibility for " +
        "students and faculty. My work includes designing and implementing core features like the BYU Info/IT Support " +
        "views and the Classes widget, as well as fixing key issues in the Home Screen. I led the development of the " +
        "Home Screen search functionality and created an interactive Intro Tour to support the app’s redesign—enhancing " +
        "both usability and onboarding.",
      link: "http://example.com",
      image: "/assets/picture/byu.png",
    },
    {
      title: "Cono Sur",
      description: "A native iOS app showcasing traditional recipes from southern South America, including countries " +
        "like Chile, Argentina, Paraguay, and Peru. Each recipe features an image (loaded via AsyncImage), along " +
        "with key details such as servings, cook time, ingredients, and step-by-step instructions. Users can edit all " +
        "recipe fields, including the title, description, instructions, and categories. Favorites can be saved, and users " +
        "can create entirely new recipes and categories. The app uses SwiftData for local persistence and supports " +
        "NavigationSplitView to deliver an optimized experience for iPad users.",
      link: "http://example.com",
      image: "/assets/picture/recipes.png",
    },
    {
      title: "FocusFlow",
      description: "FocusFlow is a SwiftUI app designed to support individuals with ADHD and other neurodivergences " +
        "in staying focused and organized. It guides users through structured Focus Sessions with real-time feedback on " +
        "remaining time, upcoming tasks, and time saved by staying on track. Timers and sessions persist in the " +
        "background for uninterrupted focus. Users receive timely alerts as tasks approach, reach, or exceed their " +
        "time limits. The app also supports Live Activities, allowing users to monitor their sessions directly from the " +
        "Lock Screen or Dynamic Island without opening the app.",
      link: "http://example.com",
      image: "/assets/picture/focusflow.png",
    },
    {
      title: "Improvify",
      description: "Improvify is a minimalist SwiftUI habit tracker that helps users build positive routines without " +
        "the pressure of perfect streaks. Instead of focusing on consecutive completions, Improvify highlights " +
        "long-term progress through a dynamic graph that visualizes improvement over time. Users can create both " +
        "daily and weekly habits, set smart reminders, and track their consistency without guilt—making the app ideal " +
        "for personal growth, wellness, and productivity goals. Built using SwiftUI, SwiftData, and SwiftCharts. ",
      link: "http://example.com",
      image: "/assets/picture/improvify.png",
    },
    {
      title: "Learn Spanish",
      description: "A SwiftUI language learning app designed to make vocabulary practice engaging and interactive. " +
        "Each topic includes a lesson, practice mode, quiz mode, and a word list—unlocked progressively to simulate " +
        "learning levels like Duolingo. Practice mode features animated, swipeable cards with color-coded definitions, " +
        "while quiz mode offers time-based challenges, bonus points, sound feedback, and score tracking. User progress " +
        "is persisted via UserDefaults, and the app supports both portrait and landscape orientations across devices.",
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
