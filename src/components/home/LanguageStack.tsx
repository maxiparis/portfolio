import {useTheme} from "../ThemeSetter.tsx";
import React from "react";

interface LanguageStackProps {
  language: string,
  index?: number
}

export function LanguageStack({ language, index}: LanguageStackProps) {
  const { getStyle } = useTheme();

  function getLanguageIconComponent(language: string): string | null {
    switch (language) {
      case "Swift":
        return getStyle.icons.Swift
      case "JavaScript":
        return getStyle.icons.JavaScript
      case "TypeScript":
        return getStyle.icons.TypeScript
      case "Java":
        return getStyle.icons.Java
      case "Shell":
        return getStyle.icons.Shell
      case "CSS":
        return getStyle.icons.CSS
      case "HTML":
        return getStyle.icons.HTML
      case "Dockerfile":
        return getStyle.icons.Dockerfile
      case "Lua":
        return getStyle.icons.Lua
      default:
        return getStyle.icons.default
    }
  }

  function componentWithNoIcon(language: string, index: number | undefined) {
    return <p className={index == 0 ? "ms-auto" : ""} key={`k${index}`}>{language}</p>
  }

  function componentWithIcon(language: string, index: number | undefined) {
    const background = language == "JavaScript" ? "black" : ""

    return (
      <div className={`${index == 0 ? "ms-md-auto" : ""} d-flex flex-column align-items-center`}>
        <i className={getLanguageIconComponent(language)!} style={{fontSize: '40px', backgroundColor: background}}></i>
        <p className={`h6 ${getStyle.text}`}>{language}</p>
      </div>
    )
  }

  function component(language: string, index: number | undefined) {
    return getLanguageIconComponent(language) == null ? componentWithNoIcon(language, index) : componentWithIcon(language, index)
  }

  return (
    <>
      {component(language, index)}
    </>
  )
}
