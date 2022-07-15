import React from "react";
import logo from "../../assets/logo-Spotter.svg";
import Navigation from "./../navigation/Navigation";

const Header = () => {
    return (
        <div className="header">
            <div className="header__item">
                <div className="logo">
                    <img src={logo} />
                </div>
            </div>
            <div className="header__item">
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
