import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiSass,
  SiReact,
  SiReactrouter,
  SiGit,
  SiGithub,
  SiJupyter,
  SiVuedotjs,
  SiStyledcomponents,
} from "react-icons/si";

const SkillsData = {
  skills: [
    {
      category: "Languages & Technologies",
      links: [
        { title: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
        { title: "HTML", icon: <SiHtml5 />, color: "#e34c26" },
        { title: "CSS", icon: <SiCss3 />, color: "#264de4" },
        { title: "Python", icon: <SiPython />, color: "#4b8bbe" },
        { title: "Sass", icon: <SiSass />, color: "#c69" },
      ],
    },
    {
      category: "Libraries",
      links: [
        { title: "React", icon: <SiReact />, color: "#61dbfb" },
        { title: "Vue", icon: <SiVuedotjs />, color: "#42b883" },
        { title: "React Router", icon: <SiReactrouter />, color: "#f44250" },
        {
          title: "Styled Components",
          icon: <SiStyledcomponents />,
          color: "#9a643d",
        },
      ],
    },
    {
      category: "Tools",
      links: [
        { title: "Git", icon: <SiGit />, color: "#f44250" },
        { title: "GitHub", icon: <SiGithub />, color: "#fff" },
        { title: "Jupyter", icon: <SiJupyter />, color: "#f37726" },
      ],
    },
  ],
};
export default SkillsData;
