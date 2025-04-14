import {Stack} from "react-bootstrap";
import {BootstrapColor, SkillsRow} from "./SkillsRow.tsx";


export function SkillsList() {
  const skills: {
    name: string,
    percentage: number,
    color: BootstrapColor,
  }[] = [
    {
      name: "Swift",
      percentage: 90,
      color: "danger"
    },
    {
      name: "SwiftUI",
      percentage: 85,
      color: "danger"
    },
    {
      name: "XCode",
      percentage: 90,
      color: "primary"
    },
    {
      name: "TypeScript",
      percentage: 75,
      color: "primary"
    },
    {
      name: "React",
      percentage: 70,
      color: "info"
    },
    {
      name: "Vue",
      percentage: 55,
      color: "success"
    },
    {
      name: "JavaScript",
      percentage: 65,
      color: "warning"
    },
    {
      name: "Git",
      percentage: 90,
      color: "danger"
    },
    {
      name: "Bootstrap",
      percentage: 80,
      color: "primary"
    }
  ]

  const randomBoostrapColors: BootstrapColor[] = ["primary", "success", "danger", "warning", "info"];

  function skillsRows() {
    return skills
      .sort((a, b) => b.percentage - a.percentage)
      .map((skill, index) => (
        <>
          <SkillsRow
            language={skill.name}
            percentage={skill.percentage}
            bootstrapColor={skill.color}
          />
        </>
  ));
  }
  
  return (
    <Stack className={"mt-5"} gap={4}>
      {skillsRows()}
    </Stack>
  );
}

