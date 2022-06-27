import React from "react";

import HeroData from "../../data/HeroData";
import {
  Heading,
  SubHeading,
  Description,
  LinkGroup,
  Link,
  Icon,
  Text,
} from "./Hero.styles";
import SectionContainer from "../shared/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer>
      <Heading>Madhu Sudhan</Heading>
      <SubHeading>FrontEnd Web Developer</SubHeading>
      <Description>
        Welcome to my digital garden. I live in India and love all things web.
        This website is a collection of all the things I've learned and created
        over time.
      </Description>
      <LinkGroup>
        {HeroData.links.map((link) => (
          <Link
            key={link.text}
            href={link.link}
            target="_blank"
            rel="noreferrer"
          >
            <Icon>{link.icon}</Icon>
            <Text>{link.text}</Text>
          </Link>
        ))}
      </LinkGroup>
    </SectionContainer>
  );
};

export default Hero;
