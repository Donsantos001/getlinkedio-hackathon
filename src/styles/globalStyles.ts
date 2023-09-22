import { createGlobalStyle } from 'styled-components';

// type ThemeType = typeof theme;
const GlobalStyle = createGlobalStyle`
  :root{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
    
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: white;
  }
`;
export default GlobalStyle;
