import styled from 'styled-components';
import Header from "../components/Header";

const ReportpageStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Report = () => {
    return(
        <div className="Reportpage">
            <Header />
            <ReportpageStyle>
                레포트페이지에요
            </ReportpageStyle>
        </div>
    )
}

export default Report;