import styled from 'styled-components';
import theme from "../styles/theme";
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";

const SignuppageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InputboxStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const PStyle = styled.p`
    margin: 5px 0px;
    font-size: 13px;
`

const InputStyle = styled.input`
    width: 360px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
`

const NamedivStyle = styled.div`
`

const IDdivStyle = styled.div`
    display: flex;
    flex-direction: column;
`

const InputButtonStyle = styled.div`
    width: 360px;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

const PwdivStyle = styled.div`
`

const BelongdivStyle = styled.div`
`

const AreadivStyle = styled.div`
`

const PhonedivStyle = styled.div`
`

const Signup = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/")
    }
    
    return(
        <SignuppageStyle>
            <h3 id="page_title">회원가입</h3>

            <InputboxStyle>
                <NamedivStyle>
                    <PStyle>이름</PStyle> 
                    <InputStyle/>
                </NamedivStyle>

                <IDdivStyle>
                    <PStyle>아이디</PStyle>
                    <InputButtonStyle>
                        <InputStyle/>
                        <Button text="중복 확인" />
                    </InputButtonStyle>
                </IDdivStyle>

                <PwdivStyle>
                    <PStyle>비밀번호</PStyle>
                    <InputStyle/>
                    <PStyle>비밀번호 확인</PStyle>
                    <InputStyle/>
                </PwdivStyle>

                <BelongdivStyle>
                    <PStyle>소속</PStyle>
                    <InputStyle />
                </BelongdivStyle>

                <AreadivStyle>
                    <PStyle>관할구역</PStyle>
                    <div>
                        <InputStyle />
                    </div>
                </AreadivStyle>

                <PhonedivStyle>
                    <PStyle>연락처</PStyle>
                    <InputStyle />
                </PhonedivStyle>

                <Button text="가입하기" onClick={onSubmit}/>
            </InputboxStyle>
        </SignuppageStyle>
    )
}

export default Signup;