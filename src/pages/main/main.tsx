import Button from "../../components/Button"
import Header from "../../components/Header";

const Main = () => {
    return( 
    <div>
        <div className="Main">
            <Header />
            <Button text="로그인"/>
            <Button text="회원가입하러 가기" />
        </div>
    </div>

    )
}

export default Main;