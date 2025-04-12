import {useTheme} from "../ThemeSetter.tsx";
import React from "react";

interface LanguageStackProps {
  devicon: string,
  language: string,
  index: number
}

export function LanguageStack({ devicon, language, index}: LanguageStackProps) {
  const { getStyle } = useTheme();
  return (
    <div className={`${index == 0 ? "ms-md-auto" : ""} d-flex flex-column align-items-center`}>
      <i className={devicon} style={{fontSize: '40px'}}></i>
      <p className={`h6 ${getStyle.text}`}>{language}</p>
    </div>
  );
}
