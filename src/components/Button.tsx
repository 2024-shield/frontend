import styled from "styled-components";
import theme from "../styles/theme";
import { ReactNode } from 'react';;

interface ButtonProps{
    text: ReactNode;
	onClick?: () => void;
}

const StyledButton = styled.button`
    width: 80%;
    height: 40px;
    background-color: ${theme.colors.mainNavy};
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid ${theme.colors.mainNavy};
`

const Button = ({ text, onClick }: ButtonProps) => {
    return(
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button