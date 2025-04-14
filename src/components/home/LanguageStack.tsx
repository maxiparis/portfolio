import {useTheme} from "../ThemeSetter.tsx";
import React from "react";

interface LanguageStackProps {
  language: string,
  index?: number
}

export function LanguageStack({ language, index}: LanguageStackProps) {
  const { getStyle } = useTheme();

  function getLanguageIconComponent(language: string): string | null {
    switch (language.toLowerCase()) {
      case "swift":
        return getStyle.icons.Swift
      case "xcode":
        return getStyle.icons.XCode
      case "swiftui":
        return getStyle.icons.SwiftUI
      case "react":
        return getStyle.icons.React
      case "vue":
        return getStyle.icons.Vue
      case "javascript":
        return getStyle.icons.JavaScript
      case "typescript":
        return getStyle.icons.TypeScript
      case "java":
        return getStyle.icons.Java
      case "shell":
        return getStyle.icons.Shell
      case "css":
        return getStyle.icons.CSS
      case "html":
        return getStyle.icons.HTML
      case "dockerfile":
        return getStyle.icons.Dockerfile
      case "lua":
        return getStyle.icons.Lua
      case "git":
        return getStyle.icons.Git
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
