import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";

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

const Header = (props: any) => {
    return(
        <StyledHeader>
            <div className="home">
                홈
            </div>

            <Link to="/login">
                <div className="report">
                    레포트에용
                </div>
            </Link>

            <Link to="/mypage">
                <div className="my">
                    {/* https://velog.io/@jihukimme/React-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%AA%A8%EB%B0%94%EC%9D%BC-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0-%ED%97%A4%EB%8D%94-%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98-%EB%B0%94-%EA%B8%B0%ED%83%80-%EC%9C%A0%EC%9A%A9%ED%95%9C-%EC%A0%95%EB%B3%B4 */}
                    마이페이지에용
                </div>
            </Link>
        </StyledHeader>
    )
}

export default Header