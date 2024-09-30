import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      neutral: {
        white: string;
        lightGrey: string;
        mediumGrey: string;
        darkGrey: string;
      };
      semantic: {
        success: string;
        warning: string;
        error: string;
      };
    };
    fonts: {
      pretendard: {
        bold: string;
        regular: string;
        thin: string;
      };
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}
