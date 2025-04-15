import {useTheme} from "../ThemeSetter.tsx";
import React from "react";
import {IconProvider} from "../../utils/IconProvider.ts";

interface LanguageStackProps {
  language: string,
  index?: number
}

export function LanguageStack({ language, index}: LanguageStackProps) {
  const { theme, getStyle } = useTheme();

  function componentWithIcon(language: string, index: number | undefined) {
    const background = language == "JavaScript" ? "black" : ""

    return (
      <div className={`${index == 0 ? "ms-md-auto" : ""} d-flex flex-column align-items-center`}>
        <i className={IconProvider.getIcon(language, theme)} style={{fontSize: '40px', backgroundColor: background}}></i>
        <p className={`h6 ${getStyle.text}`}>{language}</p>
      </div>
    )
  }

  return (
    <>
      {componentWithIcon(language, index)}
    </>
  )
}
