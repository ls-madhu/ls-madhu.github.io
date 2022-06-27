import React from "react";

import GlobalStyles from "./GlobalStyles";
import Container from "./components/shared/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
