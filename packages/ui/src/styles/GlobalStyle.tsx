import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    

    @font-face {
        font-family: "nanumSquareNeo";
        font-weight: 300;
        font-style: normal;
        src: url("https://cdn.jsdelivr.net/gh/websfont/nanumSquareNeo/nanumSquareNeo-Light.eot");
        src: url("https://cdn.jsdelivr.net/gh/websfont/nanumSquareNeo/nanumSquareNeo-Light.eot?#iefix") format("embedded-opentype"),
            url("https://cdn.jsdelivr.net/gh/websfont/nanumSquareNeo/nanumSquareNeo-Light.woff2") format("woff2"),
            url("https://cdn.jsdelivr.net/gh/websfont/nanumSquareNeo/nanumSquareNeo-Light.woff") format("woff"),
            url("https://cdn.jsdelivr.net/gh/websfont/nanumSquareNeo/nanumSquareNeo-Light.ttf") format("truetype");
        font-display: swap;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "nanumSquareNeo";
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

`

export default GlobalStyle;
