import React from "react";

import SkillsData from "../../data/SkillsData";
import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";
import {
  SkillCategory,
  SkillHeading,
  SkillIcon,
  SkillRow,
  SkillTooltip,
} from "./Skills.styles";

const Skills = () => {
  return (
    <SectionContainer>
      <SectionHeading>Skills</SectionHeading>
      {SkillsData.skills.map((skill) => (
        <SkillCategory key={skill.category}>
          <SkillHeading>{skill.category}</SkillHeading>
          <SkillRow>
            {skill.links.map((link) => (
              <SkillIcon style={{ color: link.color }} key={link.title}>
                {link.icon}
                <SkillTooltip>{link.title}</SkillTooltip>
              </SkillIcon>
            ))}
          </SkillRow>
        </SkillCategory>
      ))}
    </SectionContainer>
  );
};

export default Skills;
