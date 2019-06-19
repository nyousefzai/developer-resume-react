import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Roboto','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  font-family: 'Roboto', sans-serif; 
  }

  p,
  label {
    font-family: 'Roboto',Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  a, a:link,a:visited{
    text-decoration:none;
    color:#000;
    cursor:pointer;
  }
`;

export default GlobalStyle;
