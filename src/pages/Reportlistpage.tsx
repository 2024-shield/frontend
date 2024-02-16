import styled from 'styled-components';
import Header from "../components/Header";
import Button from "../components/Button";
import { Link, useNavigate } from 'react-router-dom';

const ReportlistpageStyle = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    y-overflow: scroll;
`

const SearchboxStyle = styled.div`
    height: 10vh;
`

const ButtonboxStyle = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
`

const ListboxStyle = styled.div`
    width: 100%;
    height: 62vh;
    overflow-y: scroll;
    margin-top: 2vh;
`

const ReportListStyle = styled.div`
    height: 8vh;
    padding-left: 20px;
    border: 1px solid black;
    margin: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Reportlist = () => {

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/reportwrite")
    }
    
    const reports = 
        [
            { id: 1, title: '보고서 1'},        
            { id: 2, title: '보고서 2'},        
            { id: 3, title: '보고서 3'},    
            { id: 4, title: '보고서 1'},        
            { id: 5, title: '보고서 2'},  
            { id: 6, title: '보고서 1'},        
            { id: 7, title: '보고서 2'},  
        ];
    return(
        <div className="Reportpage">
            <Header />
            <ReportlistpageStyle>
                <h3 id="page_title">보고서 내역</h3>

                <SearchboxStyle>
                    <h4>기간 검색</h4>

                </SearchboxStyle>

                <ButtonboxStyle>
                    <Button text="보고서 작성하기" onClick={onSubmit} />
                </ButtonboxStyle>

                <ListboxStyle>
                {reports.map((report) => (
                    <Link to={`/report/${report.id}`}>
                        <ReportListStyle key={report.id}>
                                <h5>{report.title}</h5>
                        </ReportListStyle>
                    </Link>
                    ))}
                </ListboxStyle>
            </ReportlistpageStyle>
        </div>
    )
}

export default Reportlist;