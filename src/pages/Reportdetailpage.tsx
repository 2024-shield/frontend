import styled from 'styled-components';
import Header from "../components/Header";

const ReportdetailpageStyle = styled.div`

`

const Reportdetail = () => {
    return(
        <div className="Reportpage">
            <Header />
            <ReportdetailpageStyle>
                <h3>보고서자세한리스트용</h3>
            </ReportdetailpageStyle>
        </div>
    )
}

export default Reportdetail;