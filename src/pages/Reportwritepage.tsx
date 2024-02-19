import styled from 'styled-components';
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from 'react';
import axios from 'axios';

const ReportwritepageStyle = styled.div`
    width: 100%;
    height: 94vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const InputButtonStyle = styled.div`
    width: 360px;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    justify-content: center;
`

const InfoNameStyle = styled.div`
    display: flex;
`

const InfoEventStyle = styled.div`

`

const InfoDamageStyle = styled.div`

`

const InfoPeopleNum = styled.div`
    display: flex;
`

const InfoMobilizationStyle = styled.div`

`

const InfoActionStyle = styled.div`
    width: 342px;
    align-self: flex-start;
`

const InputboxStyle = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`

const H5Style = styled.h5`
    margin: 5px 3px;
    font-size: 13px;
`

const H4Style = styled.h4`
    width: 300px;
    margin: 10px 0px 15px 0px;
    padding-top: 10px;
    border-top: 2px dotted navy;
`

const InputStyle = styled.input`
    width: 300px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
    justify-content: center;
`

const FormDivStyle = styled.div`
    
`

const ConnectDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Reportwrite = () => {
    const [writer, setWriter] = useState<string>("");
    const [firestation, setFirestation] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [cause, setCause] = useState<string>("");
    const [deathnumber, setDeathnumber] = useState<number>(0);
    const [injurynumber, setInjurynumber] = useState<number>(0);
    const [deathlist, setDeathlist] = useState<string>("");
    const [injurylist, setInjurylist] = useState<string>("");
    const [property, setProperty] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [equipment, setEquipment] = useState<number>(0);
    const [action, setAction] = useState<string>("");

    const report = {
        cause: cause,
        deathNum: deathnumber,
        injuryNum: injurynumber,
        theDead: deathlist,
        theInjured: injurylist,
        money: property,
        workerNum: number,
        equipNum: equipment,
        action: action        
    }

    const onReportwrite = () => {
        // navigate("/")
        axios.post('http://localhost:8080/api/reports/create/{fireId}', report)
        .then(response => {
            console.log(response.data);
            //navigate("/") // 회원가입 후 페이지 이동
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return(
        <div className="Reportpage">
            <Header />
            <ReportwritepageStyle>
                <h3 id="page_title">보고서 작성하기</h3>

                <InputboxStyle>
                    <InfoNameStyle>
                        <FormDivStyle>
                            <H5Style>작성자</H5Style>
                            <InputStyle id="width_middle" onChange={e => setWriter(e.target.value)}/>
                        </FormDivStyle>

                        <FormDivStyle>
                            <H5Style>관할 소방서</H5Style>
                            <InputStyle id="width_middle" onChange={e => setFirestation(e.target.value)}/>
                        </FormDivStyle>
                    </InfoNameStyle>

                    <InfoEventStyle>
                        <H4Style>발생 개요</H4Style>
                        <H5Style>일시</H5Style>
                        <InputStyle type="date" onChange={e => setDate(e.target.value)}/>
                        <InputStyle type="time" onChange={e => setTime(e.target.value)}/>

                        <H5Style>장소</H5Style>
                        <InputStyle onChange={e => setLocation(e.target.value)} value="효창공원"/>

                        <H5Style>원인</H5Style>
                        <InputStyle id="height_long" onChange={e => setCause(e.target.value)}/>
                    </InfoEventStyle>

                    <InfoDamageStyle>
                        <H4Style>피해 상황</H4Style>
                        <H5Style>인명 피해</H5Style>
                        <InfoPeopleNum>
                            <FormDivStyle>
                                <H5Style>사망자 수</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short" onChange={e => setDeathnumber(Number(e.target.value))}/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                            <FormDivStyle>
                                <H5Style>부상자 수</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short" onChange={e => setInjurynumber(Number(e.target.value))}/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                        </InfoPeopleNum>

                        <H5Style>사망자 명단</H5Style>
                        <InputStyle id="height_long" onChange={e => setDeathlist(e.target.value)}/>

                        <H5Style>부상자 명단</H5Style>
                        <InputStyle id="height_long" onChange={e => setInjurylist(e.target.value)}/>

                        <H5Style>재산 피해</H5Style>
                        <InputStyle onChange={e => setProperty(Number(e.target.value))}/>
                    </InfoDamageStyle>

                    <InfoMobilizationStyle>
                        <H4Style>동원 상황</H4Style>
                        <InfoPeopleNum>
                            <FormDivStyle>
                                <H5Style>인원</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short" onChange={e => setNumber(Number(e.target.value))}/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                            
                            <FormDivStyle>
                                <H5Style>장비</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short" onChange={e => setEquipment(Number(e.target.value))}/>
                                    <H5Style>대</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                        </InfoPeopleNum>
                    </InfoMobilizationStyle>

                    <InfoActionStyle>
                        <H4Style>조치 사항</H4Style>
                        <InputStyle id="height_long" onChange={e => setAction(e.target.value)}/>
                    </InfoActionStyle>
                </InputboxStyle>

                <InputButtonStyle>
                    <Button text="제출하기"/>
                </InputButtonStyle>

            </ReportwritepageStyle>
        </div>
    )
}

export default Reportwrite;