import styled from "styled-components";
import theme from "../styles/theme";

interface ButtonProps{
    text: string
}

const StyledButton = styled.button`
    width: 150px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.mainNavy};
    color: ${theme.colors.white};
`

const Button = ({ text }: ButtonProps) => {
    return(
        <StyledButton>{ text }</StyledButton>
    )
}

export default Button