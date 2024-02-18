import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect } from 'react';
import axios from 'axios';

const ChangemypageStyle = styled.div`
    width: 100%;
    height: 94vh;
    padding: 20px;
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

const H5Style = styled.h5`
    margin: 5px 0px;
    font-size: 13px;
`

const InputStyle = styled.input`
    width: 300px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
`

const SelectStyle = styled.div`
`

const NamedivStyle = styled.div`
`

const IDdivStyle = styled.div`
    display: flex;
    flex-direction: column;
`

const InputButtonStyle = styled.div`
    width: 300px;
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
  width: 300px;
`

const PhonedivStyle = styled.div`
`

const My = () => {
    const navigate = useNavigate();

    const onChangemy = () => {
        navigate("/changemy")
    }

    useEffect(() => {
        axios.post('http://localhost:8080/api/mypage')
        .then(response => {
            console.log(response.data);
            //navigate("/main") // 회원가입 후 페이지 이동
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })

    return(
        <div className="mypage">
            <Header />
            <ChangemypageStyle>
            <h3 id="page_title">마이 페이지</h3>

            <InputboxStyle>
            <NamedivStyle>
                <H5Style>이름</H5Style> 
                <InputStyle/>
            </NamedivStyle>

            <IDdivStyle>
                <H5Style>아이디</H5Style>
                <InputButtonStyle>
                    <InputStyle/>
                    흠냐
                </InputButtonStyle>
            </IDdivStyle>

            <PwdivStyle>
                <H5Style>비밀번호</H5Style>
                <InputStyle/>
                <H5Style>비밀번호 확인</H5Style>
                <InputStyle/>
            </PwdivStyle>

            <BelongdivStyle>
                <H5Style>소속</H5Style>
                <InputStyle />
            </BelongdivStyle>

            <AreadivStyle>
                <H5Style>관할구역</H5Style>
                <SelectStyle>
                서울특별시 강남구
                </SelectStyle>
            </AreadivStyle>

            <PhonedivStyle>
                <H5Style>연락처</H5Style>
                <InputStyle />
            </PhonedivStyle>

            <Button text="수정하기" onClick={onChangemy}/>
            </InputboxStyle>
        </ChangemypageStyle>
      </div>
    )
}

export default My;