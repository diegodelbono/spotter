import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Fallas from "./components/fallas/Fallas";
import Open from "./components/open/Open";

import "./sass/main.scss";

const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/fallas" element={<Fallas />} />
                    <Route path="/open" element={<Open />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
