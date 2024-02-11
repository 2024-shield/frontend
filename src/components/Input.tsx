import styled from "styled-components";

interface InputProps{
    props_placeholder: string
}

const StyledInput = styled.input`
    width: 300px;
    height: 50px;
    padding-left: 10px;
    margin: 20px 0px;
    border: 0px;
`

const Input = ({ props_placeholder }: InputProps) => {
    return(
        <StyledInput placeholder={props_placeholder} />
    )
}

export default Input