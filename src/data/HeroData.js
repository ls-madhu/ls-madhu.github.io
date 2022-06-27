import React from "react";
import { ImBlog } from "react-icons/im";
import { MdArticle } from "react-icons/md";

const HeroData = {
  links: [
    {
      text: "Resume",
      link: "https://drive.google.com/file/d/1Voi3gKj1K0WeMZCDEkXfVZM0vCIlKVNG/view",
      icon: <MdArticle />,
    },
    { text: "Blog", link: "/", icon: <ImBlog /> },
  ],
};

export default HeroData;
