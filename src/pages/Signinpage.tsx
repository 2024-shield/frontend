import styled from 'styled-components';
import logoImage from "../assets/SHIELD_Logo.png";
import Input from '../components/Input';
import Button from '../components/Button';

const SigninpageStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Signin = () => {
    return(
        <SigninpageStyle>
            <img src={logoImage} width="50%" height="50%"/>
            <Input props_placeholder='ID'/>
            <Input props_placeholder='Password'/>

            <Button text="로그인"/>
            <hr />
            <Button text="회원가입"/>
        </SigninpageStyle>
    )
}

export default Signin;