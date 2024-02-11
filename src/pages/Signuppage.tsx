import styled from 'styled-components';
import theme from "../styles/theme";
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const SignuppageStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Signup = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/")
    }
    
    return(
        <SignuppageStyle>
            회원가입
            <hr />
            이름 <Input props_placeholder='이름'/>
            아이디 <Input props_placeholder='아이디 (6~20자)'/>
            <Button text="중복 확인" />
            비밀번호 <Input props_placeholder='비밀번호 (문자, 숫자, 특수문자 포함 8~20자)'/>
            비밀번호 확인 <Input props_placeholder='비밀번호 재입력'/>

            <Button text="가입하기" onClick={onSubmit}/>
        </SignuppageStyle>
    )
}

export default Signup;