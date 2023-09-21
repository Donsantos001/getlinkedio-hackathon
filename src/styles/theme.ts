export type ThemeType = typeof defaultTheme; 

export const defaultTheme = {
  primary: process.env.REACT_APP_PRIMARY || '#D434FE',
  secondary: process.env.REACT_APP_SECONDARY || '#903AFF',

  text: process.env.REACT_APP_TEXT || '#FFFFFF',
  backround: process.env.REACT_APP_BACKGROUND ||'#150E28',
  
  gradientStart: process.env.REACT_APP_GRADIENT_START || '#FE34B9',
  gradientEnd: process.env.REACT_APP_GRADIENT_END || '#903AFF',

};
