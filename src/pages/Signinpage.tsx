import styled from 'styled-components';
import logoImage from "../assets/SHIELD_Logo.png";
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const SigninpageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Signin = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/main")
    }
    
    const NavigateSignup = () => {
        navigate("/signup")
    }

    return(
        <SigninpageStyle>
            <img src={logoImage} width="50%"/>
            <Input props_placeholder='ID'/>
            <Input props_placeholder='Password'/>
            
            <Button text="로그인" onClick={onSubmit}/>
            <hr />
            <Button text="회원가입" onClick={NavigateSignup}/>
        </SigninpageStyle>
    )
}

export default Signin;