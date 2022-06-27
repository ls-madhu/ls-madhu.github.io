import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #0e0d0c;
    --primary-text-color: #fff1f2cc;
    --secondary-text-color: #ffe4e6cc;
    --tertiery-text-color: #ffe4e699;
    --accent-color: #862fd4;
    --link-color: #78716c;
    --link-hover-color: #fecdd3e6;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    font-family: 'Karla', sans-serif;
  }

  *::selection {
    background-color: var(--accent-color);
    color: var(--primary-text-color);
  }

  *:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 1px;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #817974;

    &:hover {
      background-color: #9a938e;
    }
  }

  html, body {
    height: 100%;
    font-size: 16px;
  }

  body {
    background-color: var(--background-color);
    color: var(--primary-text-color);
    -webkit-font-smoothing: antialiased;
    line-height: 1.2;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
    color: var(--link-color);
    font-weight: 600;
  }

  a:hover {
    color: var(--link-hover-color);
    text-decoration: underline #fda4af4d solid 2px;
    text-underline-offset: 2px;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
