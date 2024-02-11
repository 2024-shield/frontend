import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signinpage from "./pages/Signinpage";
import Signuppage from "./pages/Signuppage";
import Mainpage from "./pages/Mainpage";
import Reportpage from "./pages/Reportpage";
import Mypage from "./pages/Mypage";

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signinpage />} />
                    <Route path="/signup" element={<Signuppage />} />
                    <Route path="/main" element={<Mainpage />} />
                    <Route path="/report" element={<Reportpage />} />
                    <Route path="/my" element={<Mypage />} />
                    {/* <Route path="signup" element={<Signup />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router