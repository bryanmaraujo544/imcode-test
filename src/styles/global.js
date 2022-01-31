import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
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