import styled from 'styled-components';
import Header from "../components/Header";

const ReportwritepageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    y-overflow: scroll;
`

const SearchboxStyle = styled.div`

`

const InputButtonStyle = styled.div`
    width: 360px;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
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
    width: 360px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
`

const Reportwrite = () => {
    return(
        <div className="Reportpage">
            <Header />
            <ReportwritepageStyle>
                <h3 id="page_title">보고서 내역</h3>

                <SearchboxStyle>
                    <h4 id="page_title">기간 검색</h4>

                </SearchboxStyle>
                <InputboxStyle>
                    
                </InputboxStyle>
            </ReportwritepageStyle>
        </div>
    )
}

export default Reportwrite;