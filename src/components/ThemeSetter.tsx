import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { createContext, useContext, useState } from "react";

// Define the ThemeContextType interface
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
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
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
    );
}
