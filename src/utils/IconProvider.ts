// iconProvider.ts
import {Themes} from "../components/ThemeSetter.tsx";

export class IconProvider {
  // Icons for light and dark themes
  private static icons = {
    Swift: {
      light: "devicon-swift-plain colored",
      dark: "devicon-swift-plain colored",
    },
    SwiftUI: {
      light: "devicon-swift-plain colored",
      dark: "devicon-swift-plain colored",
    },
    XCode: {
      light: "devicon-xcode-plain colored",
      dark: "devicon-xcode-plain colored",
    },
    JavaScript: {
      light: "devicon-javascript-plain colored",
      dark: "devicon-javascript-plain colored",
    },
    TypeScript: {
      light: "devicon-typescript-plain colored",
      dark: "devicon-typescript-plain colored",
    },
    Java: {
      light: "devicon-java-plain colored",
      dark: "devicon-java-plain",
    },
    Shell: {
      light: "devicon-powershell-plain colored",
      dark: "devicon-powershell-plain",
    },
    React: {
      light: "devicon-react-plain",
      dark: "devicon-react-original colored",
    },
    Vue: {
      light: "devicon-vuejs-plain colored",
      dark: "devicon-vuejs-plain colored",
    },
    CSS: {
      light: "devicon-css3-plain colored",
      dark: "devicon-css3-plain colored",
    },
    HTML: {
      light: "devicon-html5-plain colored",
      dark: "devicon-html5-plain colored",
    },
    Dockerfile: {
      light: "devicon-docker-plain colored",
      dark: "devicon-docker-plain colored",
    },
    Lua: {
      light: "devicon-lua-plain colored",
      dark: "devicon-lua-plain",
    },
    Git: {
      light: "devicon-git-plain colored",
      dark: "devicon-git-plain colored",
    },
    Bootstrap: {
      light: "devicon-bootstrap-plain colored",
      dark: "devicon-bootstrap-plain colored",
    },
    default: {
      light: "bi bi-question-circle",
      dark: "bi bi-question-circle",
    },
  };

  // Method to retrieve the icon for a given language and theme
  static getIcon(language: string, theme: Themes): string {
    const normalizedLanguage = language.toLowerCase(); // Normalize input for matching
    const matchingKey = Object.keys(this.icons).find(
      (key) => key.toLowerCase() === normalizedLanguage
    ) as keyof typeof IconProvider.icons | undefined;

    if (matchingKey) {
      return this.icons[matchingKey][theme] || this.icons.default[theme];
    }
    return this.icons.default[theme];
  }
}