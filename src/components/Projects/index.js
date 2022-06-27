import React from "react";
import ProjectsData from "../../data/ProjectsData";

import SectionContainer from "../shared/SectionContainer";
import SectionHeading from "../shared/SectionHeading";
import {
  ProjectsContainer,
  Project,
  ProjectIcon,
  ProjectInfo,
  ProjectHeading,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
} from "./Projects.styles";

const Projects = () => {
  return (
    <SectionContainer>
      <SectionHeading>Projects</SectionHeading>
      <ProjectsContainer>
        {ProjectsData.map((project) => (
          <Project key={project.title}>
            <ProjectIcon>{project.icon}</ProjectIcon>
            <ProjectInfo>
              <ProjectHeading>{project.title}</ProjectHeading>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </ProjectLink>
                <ProjectLink
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </Project>
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;
