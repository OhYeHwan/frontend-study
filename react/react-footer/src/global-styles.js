import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        box-size: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        top: 300px;
        background: #ff9c00;
        font-family: 'Nunito', sans-serif;
    }
`;
