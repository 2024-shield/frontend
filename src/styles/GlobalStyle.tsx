// 브라우저마다 다른 기본 스타일을 초기화하고
// 전역에서 쓰일 스타일들을 정의
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        font-family: 'Nanum Gothic', sans-serif;
    }

    body{
        margin: 0px;
    }

    a{
        color:inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }

    #root{
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        background-color: #f2f2f2;
    }
`;