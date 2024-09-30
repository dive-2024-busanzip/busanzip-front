import { FONT_PATHS } from "@assets/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url(${FONT_PATHS.PRETENDARD_BOLD_WOFF2}) format('woff2'),
    url(${FONT_PATHS.PRETENDARD_BOLD_WOFF}) format('woff'),
    url(${FONT_PATHS.PRETENDARD_BOLD_TTF}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${FONT_PATHS.PRETENDARD_REGULAR_WOFF2}) format('woff2'),
    url(${FONT_PATHS.PRETENDARD_REGULAR_WOFF}) format('woff'),
    url(${FONT_PATHS.PRETENDARD_REGULAR_TTF}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Thin';
    src: url(${FONT_PATHS.PRETENDARD_THIN_WOFF2}) format('woff2'),
    url(${FONT_PATHS.PRETENDARD_THIN_WOFF}) format('woff'),
    url(${FONT_PATHS.PRETENDARD_THIN_TTF}) format('truetype');
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px; // 기본 폰트 사이즈 설정
  }

  body {
    overflow-x: hidden;
    touch-action: manipulation;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent; // 탭 시 하이라이트 제거
  }

  #root {
    height: 100%;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    font-family: inherit;
    font-size: inherit;
  }

  // 모바일에서 선택 방지
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // 입력 필드는 선택 가능하게
  input, textarea {
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
`;

export default GlobalStyle;
