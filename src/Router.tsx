import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    {/* <Route path="signup" element={<Signup />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router