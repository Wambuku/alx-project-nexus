import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: {
        primary: string;
        secondary: string;
        muted: string;
      };
      accent: string;
      warning: string;
      error: string;
    };
    
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
    
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
  }
}