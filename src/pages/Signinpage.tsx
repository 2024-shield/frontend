import styled from 'styled-components';
import logoImage from "../assets/SHIELD_Logo.png";
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const SigninpageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputStyle = styled.input`
    width: 300px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
`

const Signin = () => {
    const navigate = useNavigate();

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const user = {
        userId: id/* 아이디 입력 값 */,
        password: password/* 비밀번호 입력 값 */,
    };

    const onSignin = () => {
        // navigate("/main")
        axios.post('http://localhost:8080/api/login', user)
        .then(response => {
            console.log(response.data);
            navigate("/main") // 회원가입 후 페이지 이동
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    const NavigateSignup = () => {
        navigate("/signup")
    }

    return(
        <SigninpageStyle>
            <img src={logoImage} width="50%"/>
            <InputStyle onChange={e => setId(e.target.value)} type='text' placeholder="ID"/>
            <InputStyle onChange={e => setPassword(e.target.value)} type='password' placeholder="Password"/>
            
            <Button text="로그인" onClick={onSignin}/>
            <hr />
            <Button text="회원가입" onClick={NavigateSignup}/>
        </SigninpageStyle>
    )
}

export default Signin;