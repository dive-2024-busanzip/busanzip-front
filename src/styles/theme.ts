import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: "#FFFFFF",
    primary: "#323d46",
    neutral: {
      white: "#FFFFFF",
      lightGrey: "#f5f5f5",
      mediumGrey: "#757575",
      darkGrey: "#3d3d3d",
    },
    semantic: {
      success: "#4CAF50",
      warning: "#FF9800",
      error: "#FF5252",
    },
  },

  fonts: {
    pretendard: {
      bold: "Pretendard-Bold, sans-serif",
      regular: "Pretendard-Regular, sans-serif",
      thin: "Pretendard-Thin, sans-serif",
    },
  },

  fontSize: {
    small: "14px", // description
    medium: "16px", // subtitle
    large: "20px", // title
  },

  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
};

export default theme;
