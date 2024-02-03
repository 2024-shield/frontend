// 브라우저마다 다른 기본 스타일을 초기화하고
// 전역에서 쓰일 스타일들을 정의
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
export const GlobalStyle = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
        font-family: 'Nanum Gothic', sans-serif;
    }

    a{
        color:inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul, ol, li{
        list-style: none;
    }
`;