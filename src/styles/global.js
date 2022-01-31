import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }

  button, li {
    cursor: pointer;
  }

  li, a {
    list-style: none;
    text-decoration: none;
  }

  html: {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
  }
`;

export default global;