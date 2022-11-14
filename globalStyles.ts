import { createGlobalStyle } from "styled-components";

import { DM_Sans } from "@next/font/google";

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
});

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
  }

  html, body, #__next {
    height: 100%
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  
  body {
    background: black;
    color: white;
    font-family: ${dmsans.style.fontFamily};
  }

  button {
    cursor: pointer;
  }

  input {
    font-family: ${dmsans.style.fontFamily};
  }

`;
