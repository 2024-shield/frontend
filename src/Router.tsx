import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Signup from "./pages/signup/signup";

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router