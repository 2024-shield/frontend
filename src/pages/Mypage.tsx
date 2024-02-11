import styled from 'styled-components';
import Header from "../components/Header";

const MypageStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const My = () => {
    return(
        <div className="Reportpage">
            <Header />
            <MypageStyle>
                마이페이지에요
            </MypageStyle>
        </div>
    )
}

export default My;