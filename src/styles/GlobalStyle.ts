import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --kiwi-color1: #FFFFFF;
  --kiwi-color2: #888888;
  --kiwi-color3:#333333;
  --kiwi-color4:#181818;
  --kiwi-color5:#000000;
  --kiwi-color6:#00c582;
  --kiwi-color7:#1da46c;
  --kiwi-color8:#04685F;
  --kiwi-color9: #0B1B45;
  --kiwi-border: 0.1rem solid;
  --kiwi-font-family: 'Roboto Condensed', sans-serif;
  --kiwi-small-font-size: 1.6rem;
  --kiwi-medium-font-size: 2rem;
  --kiwi-large-font-size: 2.5rem;
  --kiwi-light-font-weight:300;
  --kiwi-heavy-font-weight:500;
  --kiwi-vertical-gap: 2rem;
  --kiwi-horizontal-gap: 1rem;
  --kiwi-line-height: 3rem;
  --kiwi-box-shadow: 0.2rem 0.4rem 0.5rem #181818;
  --kiwi-transition-duration: 0.4s;
}

/* Reset CSS by Eric Meyer */
  /* http://meyerweb.com/eric/tools/css/reset/ */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

html {
    font-size:62.5%;
} 
body {
    background: var(--kiwi-color7);
    background: linear-gradient(160deg, var(--kiwi-color8) -30%, var(--kiwi-color6) 100%);
    font-family: var(--kiwi-font-family);
    color: #fff;;
    font-size: var(--kiwi-medium-font-size);
    padding-top:2.5rem;
    display: flex;
    justify-content: center;
    margin-bottom:15rem;
}
#root {
    width: 36rem;
    min-height: 100vh;
  }
`;
export default GlobalStyle;
