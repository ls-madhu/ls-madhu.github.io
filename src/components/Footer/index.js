import React from "react";

import { FooterContainer, LinkGroup } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Thanks for visiting.</p>
      <LinkGroup>
        <a href="https://github.com/ls-madhu" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://twitter.com/madhusr_vin"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/madhu_ins"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </LinkGroup>
    </FooterContainer>
  );
};

export default Footer;
