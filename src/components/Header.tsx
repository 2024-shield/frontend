import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header` 
    height: 6vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.mainNavy};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 100; /* 다른 요소 위에 나타나도록 높은 z-index 값을 설정 */
`

const Header = () => {
    return(
        <StyledHeader>
            <div className="home">
                <FontAwesomeIcon icon={faHouse} />
            </div>

            <Link to="/login">
                <div className="report">
                    <FontAwesomeIcon icon={faFile} /> 보고서
                </div>
            </Link>

            <Link to="/mypage">
                <div className="my">
                    <FontAwesomeIcon icon={faUser} /> 마이페이지
                </div>
            </Link>
        </StyledHeader>
    )
}

export default Header