import React from "react";
import { FaBitcoin, FaList, FaMarkdown } from "react-icons/fa";

const ProjectsData = [
  {
    title: "Crypto Tracker",
    description:
      "This is a website for tracking Cryptocurrencies, built with ReactJS and ChartJS.",
    codeLink: "https://github.com/ls-madhu/crypto-tracker",
    liveLink: "https://mcryptotracker.netlify.app/",
    icon: <FaBitcoin />,
  },
  {
    title: "Markdown Notes",
    description:
      "A note-taking app for the web with markdown support. The notes are stored in the Local Storage.",
    codeLink: "https://github.com/ls-madhu/notes-app-react",
    liveLink: "https://ls-madhu.github.io/notes-app-react/",
    icon: <FaMarkdown />,
  },
  {
    title: "Todo App",
    description:
      " A simple todo list app built with the objective of learning ReactJS.",
    codeLink: "https://github.com/ls-madhu/todo-app-react",
    liveLink: "https://ls-madhu.github.io/todo-app-react/",
    icon: <FaList />,
  },
];

export default ProjectsData;
