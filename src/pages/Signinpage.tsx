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

const InputboxStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const ButtonboxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const InputButtonboxStyle = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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

            <InputButtonboxStyle>
                <InputboxStyle>
                    <Input props_placeholder='ID'/>
                    <Input props_placeholder='Password'/>
                </InputboxStyle>
                
                <ButtonboxStyle>
                    <Button text="로그인" onClick={onSubmit}/>
                    <hr />
                    <Button text="회원가입" onClick={NavigateSignup}/>
                </ButtonboxStyle>
            </InputButtonboxStyle>
        </SigninpageStyle>
    )
}

export default Signin;