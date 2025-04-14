import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {createContext, useContext, useMemo, useState} from "react";

// Define the ThemeContextType interface
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
    getStyle: {
        text: string,
        themeIcon: string,
        themeVariant: string,
        rocketColor: string,
        contactForm: string,
        contactFormBackground: string,
        textInversed: string,
        primaryColor: string,
        secondaryColor: string,
        accentColor: string,
        background: string,
        icons: {
            Swift: string,
            SwiftUI: string,
            XCode: string,
            JavaScript: string,
            TypeScript: string,
            Java: string,
            Shell: string,
            React: string,
            Vue: string,
            CSS: string,
            HTML: string,
            Dockerfile: string,
            Lua: string,
            Git: string,
            default: string,
        }
    }
}

// Create the context with undefined as the default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeSetter");
    }
    return context;
}

// ThemeSetter component to provide the theme context
export function ThemeSetter({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("dark");
    const styles = {
        light: {
            text: "text-dark",
            themeIcon: "bi bi-moon-fill",
            themeVariant: "outline-dark",
            rocketColor: "text-primary",
            contactForm: "input-light",
            contactFormBackground: "contact-card-light",
            primaryColor: "#03669b",
            textInversed: "text-white",
            secondaryColor: "#2ad2e5",
            accentColor: "#ff6a38",
            background: "#ffffff",
            icons: {
                Swift: "devicon-swift-plain colored",
                SwiftUI: "devicon-swift-plain colored",
                XCode: "devicon-xcode-plain colored",
                JavaScript: "devicon-javascript-plain colored",
                TypeScript: "devicon-typescript-plain colored",
                Java: "devicon-java-plain colored",
                Shell: "devicon-powershell-plain colored",
                React: "devicon-react-original colored",
                Vue: "devicon-vuejs-plain colored",
                CSS: "devicon-css3-plain colored",
                HTML: "devicon-html5-plain colored",
                Dockerfile: "devicon-docker-plain colored",
                Lua: "devicon-lua-plain colored",
                Git: "devicon-git-plain colored",
                default:"bi bi-question-circle",
            }
        },
        dark: {
            text: "text-white",
            themeIcon: "bi bi-sun-fill",
            themeVariant: "outline-light",
            rocketColor: "text-info",
            contactForm: "input-dark",
            contactFormBackground: "contact-card-dark",
            textInversed: "text-dark",
            primaryColor: "#64c7fc",
            secondaryColor: "#1ac3d5",
            accentColor: "#c73200",
            background: "#000000",
            icons: {
                Swift: "devicon-swift-plain colored",
                SwiftUI: "devicon-swift-plain colored",
                XCode: "devicon-xcode-plain colored",
                JavaScript: "devicon-javascript-plain colored",
                TypeScript: "devicon-typescript-plain colored",
                Java: "devicon-java-plain colored",
                Shell: "devicon-powershell-plain",
                React: "devicon-react-original colored",
                Vue: "devicon-vuejs-plain colored",
                CSS: "devicon-css3-plain colored",
                HTML: "devicon-html5-plain colored",
                Dockerfile: "devicon-docker-plain colored",
                Lua: "devicon-lua-plain",
                Git: "devicon-git-plain colored",
                default:"bi bi-question-circle",
            }
        },
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const getStyle = useMemo(() => {
        return theme === "light" ? styles.light : styles.dark;
    }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme, getStyle }}>
          {children}
      </ThemeContext.Provider>
    );
}
