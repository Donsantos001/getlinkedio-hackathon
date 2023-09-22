export type ThemeType = typeof defaultTheme; 

export const defaultTheme = {
  primary: process.env.REACT_APP_PRIMARY || '#D434FE',
  secondary: process.env.REACT_APP_SECONDARY || '#903AFF',
  tertiary: process.env.REACT_APP_TERTIARY  ||'#FF26B9',

  text: process.env.REACT_APP_TEXT || '#FFFFFF',
  background: process.env.REACT_APP_BACKGROUND ||'#150E28',
  backgroundDark: process.env.REACT_APP_BACKGROUND_DARK ||'#100B20',
  
  gradientStart: process.env.REACT_APP_GRADIENT_START || '#FE34B9',
  gradientEnd: process.env.REACT_APP_GRADIENT_END || '#903AFF',

};
