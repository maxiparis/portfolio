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
        primaryColor: string,
        secondaryColor: string,
        accentColor: string,
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
            secondaryColor: "#2ad2e5",
            accentColor: "#ff6a38",
        },
        dark: {
            text: "text-white",
            themeIcon: "bi bi-sun-fill",
            themeVariant: "outline-light",
            rocketColor: "text-info",
            contactForm: "input-dark",
            contactFormBackground: "contact-card-dark",
            primaryColor: "#64c7fc",
            secondaryColor: "#1ac3d5",
            accentColor: "#c73200",
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
