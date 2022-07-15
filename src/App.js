import React from "react";
// import AlertList from "./components/alertList/AlertList";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Fallas from "./components/fallas/Fallas";


import "./sass/main.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/fallas" element={<Fallas />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
