import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink className="nav__item" to="/">
                Home
            </NavLink>
            <NavLink className="nav__item" to="/Fallas">
                Fallas
            </NavLink>
        </div>
    );
};

export default Navigation;
