import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        scrollbar-width: none;
        -ms-overflow-style: none;
        font-family: Open Sans;
        font-style: normal;
        box-sizing: border-box;
    }
    
    *::-webkit-scrollbar {
        display: none;
    } 
`;

export default GlobalStyle;