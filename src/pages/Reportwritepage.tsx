import styled from 'styled-components';
import Header from "../components/Header";
import Button from "../components/Button";

const ReportwritepageStyle = styled.div`
    width: 100%;
    height: 94vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    y-overflow: scroll;
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

`

const InfoEventStyle = styled.div`

`

const InfoDamageStyle = styled.div`

`

const InfoMobilizationStyle = styled.div`

`

const InfoActionStyle = styled.div`

`

const InputboxStyle = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
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
                        <H5Style>보고책임자</H5Style>
                        <InputStyle />

                        <H5Style>관할 소방서</H5Style>
                        <InputStyle />
                    </InfoNameStyle>

                    <InfoEventStyle>
                        <H5Style>일시</H5Style>
                        <InputStyle />

                        <H5Style>장소</H5Style>
                        <InputStyle />

                        <H5Style>원인</H5Style>
                        <InputStyle id="height_long" />
                    </InfoEventStyle>

                    <InfoDamageStyle>
                        <H5Style>인명 피해</H5Style>
                        <H5Style>@명 (사망 @, 부상 @)</H5Style>
                        <InputStyle />

                        <H5Style>사망자 명단</H5Style>
                        <InputStyle  id="height_long"/>

                        <H5Style>부상자 명단</H5Style>
                        <InputStyle  id="height_long"/>

                        <H5Style>재산 피해</H5Style>
                        <InputStyle />
                    </InfoDamageStyle>

                    <InfoMobilizationStyle>
                        <H5Style>동원 상황</H5Style>
                        <InputStyle id="width_short"/>
                    </InfoMobilizationStyle>

                    <InfoActionStyle>
                        <H5Style>조치 사항</H5Style>
                        <InputStyle  id="height_long"/>
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