"use client";

import "./fonts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${(props) => props.theme.secondary}
  }

  body, input, button {
    color: ${(props) => props.theme.main};
    font-size: 14px;
    font-family: "Roboto", sans-serif, Arial;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
