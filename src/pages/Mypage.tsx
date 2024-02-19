import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DataState {
    area: string;
    department: string;
    name: string;
    password: string;
    phoneNo: string;
    userId: string;
  }

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
    const [data, setData]= useState<DataState | null>(null);

    const onChangemy = () => {
        navigate("/changemy")
    }

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://localhost:8080',  // 여기에 실제 서버 주소를 입력하세요
            withCredentials: true
        });

        instance.post('/api/mypage')
        .then(response => {
            setData(response.data)
            console.log(response.data)
            // 응답을 받아서 처리하는 코드를 여기에 작성하세요.
        })
        .catch(error => {
            console.error('Error:', error);
            // 에러를 처리하는 코드를 여기에 작성하세요.
        });
    }, []);

    return(
        <div className="mypage">
            <Header />
            <ChangemypageStyle>
            <h3 id="page_title">마이 페이지</h3>

            <InputboxStyle>
            <NamedivStyle>
                <H5Style>이름</H5Style> 
                <InputStyle type="text" value={data ? data.name : ''} />
                {/* value={data.userId} */}
            </NamedivStyle>

            <IDdivStyle>
                <H5Style>아이디</H5Style>
                <InputStyle type="text" value={data ? data.userId : ''}/>
            </IDdivStyle>

            <BelongdivStyle>
                <H5Style>소속</H5Style>
                <InputStyle type="text" value={data ? data.department : ''}/>
            </BelongdivStyle>

            <AreadivStyle>
                <H5Style>관할구역</H5Style>
                <SelectStyle>
                {data ? data.area : ''}
                </SelectStyle>
            </AreadivStyle>

            <PhonedivStyle>
                <H5Style>연락처</H5Style>
                <InputStyle type="text" value={data ? data.phoneNo : ''}/>
            </PhonedivStyle>
            </InputboxStyle>
        </ChangemypageStyle>
      </div>
    )
}

export default My;