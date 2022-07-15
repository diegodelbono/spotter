import React from "react";
import AlertList from "./components/alertList/AlertList";
import Header from "./components/header/Header";

import "./sass/main.scss";

function App() {
    return (
        <div className="main">
            <Header />
            <AlertList />
        </div>
    );
}

export default App;
