import {Stack} from "react-bootstrap";
import {SkillsRow} from "./SkillsRow.tsx";


export function SkillsList() {
  const skills: {
    name: string,
    percentage: number,
  }[] = [
    {
      name: "Swift",
      percentage: 90,
    },
    {
      name: "SwiftUI",
      percentage: 85,
    },
    {
      name: "XCode",
      percentage: 90,
    },
    {
      name: "TypeScript",
      percentage: 75,
    },
    {
      name: "React",
      percentage: 70,
    },
    {
      name: "Vue",
      percentage: 55,
    },
    {
      name: "JavaScript",
      percentage: 65,
    },
    {
      name: "Git",
      percentage: 90,
    },
  ]

  function skillsRows() {
    return skills
      .sort((a, b) => b.percentage - a.percentage)
      .map((skill) => (
        <>
          <SkillsRow language={skill.name} percentage={skill.percentage}/>
        </>
  ));
  }
  
  return (
    <Stack className={"mt-5"} gap={4}>
      {skillsRows()}
    </Stack>
  );
}

