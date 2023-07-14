import {createGlobalStyle} from 'styled-components';
import localFont from "next/font/local"

const karla = localFont({src: './public/fonts/Karla-Regular.woff2'})

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

  }
  
  :root {
    --white: #FFF4D7;
    --black: #1E1E1C;
    --color1: #BB78A4;
    --color2: #FDC506;
    --color3: #ED684F;
    --color4: #39AF7A;
    --font1: ${karla.style.fontFamily};
  }
  
  body {
    background: var(--black);
    color: var(--white);
    font-family: var(--font1);
    
  }

`;
