import styled from 'styled-components';
import Header from "../components/Header";
import Button from "../components/Button";

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
    return(
        <div className="Reportpage">
            <Header />
            <ReportwritepageStyle>
                <h3 id="page_title">보고서 작성하기</h3>

                <InputboxStyle>
                    <InfoNameStyle>
                        <FormDivStyle>
                            <H5Style>작성자</H5Style>
                            <InputStyle id="width_middle"/>
                        </FormDivStyle>

                        <FormDivStyle>
                            <H5Style>관할 소방서</H5Style>
                            <InputStyle id="width_middle"/>
                        </FormDivStyle>
                    </InfoNameStyle>

                    <InfoEventStyle>
                        <H4Style>발생 개요</H4Style>
                        <H5Style>일시</H5Style>
                        <InputStyle type="date"/>
                        <InputStyle type="time"/>

                        <H5Style>장소</H5Style>
                        <InputStyle />

                        <H5Style>원인</H5Style>
                        <InputStyle id="height_long" />
                    </InfoEventStyle>

                    <InfoDamageStyle>
                        <H4Style>피해 상황</H4Style>
                        <H5Style>인명 피해</H5Style>
                        <InfoPeopleNum>
                            <FormDivStyle>
                                <H5Style>사망자 수</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short"/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                            <FormDivStyle>
                                <H5Style>부상자 수</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short"/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                        </InfoPeopleNum>

                        <H5Style>사망자 명단</H5Style>
                        <InputStyle id="height_long"/>

                        <H5Style>부상자 명단</H5Style>
                        <InputStyle id="height_long"/>

                        <H5Style>재산 피해</H5Style>
                        <InputStyle />
                    </InfoDamageStyle>

                    <InfoMobilizationStyle>
                        <H4Style>동원 상황</H4Style>
                        <InfoPeopleNum>
                            <FormDivStyle>
                                <H5Style>인원</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short"/>
                                    <H5Style>명</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                            
                            <FormDivStyle>
                                <H5Style>장비</H5Style>
                                <ConnectDiv>
                                    <InputStyle id="width_short"/>
                                    <H5Style>대</H5Style>
                                </ConnectDiv>
                            </FormDivStyle>
                        </InfoPeopleNum>
                    </InfoMobilizationStyle>

                    <InfoActionStyle>
                        <H4Style>조치 사항</H4Style>
                        <InputStyle id="height_long"/>
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