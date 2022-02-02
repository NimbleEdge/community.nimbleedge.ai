import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    body::-webkit-scrollbar {
        display: none;
    } 
`;

export default GlobalStyle;