import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { alertsFailedUrl, alertsOpenUrl } from "../../utils/Utils";

const Navigation = () => {
    // useEffect(() => {
    //     //setIsLoading(true);
    //     axios({
    //         url: alertsFailedUrl,
    //     })
    //         .then((response) => {
    //             console.log("hola");
    //             console.log("data", response.data);
    //             //setAlert(response.data);
    //         })
    //         .catch((error) => {
    //             console.log("bbbb");
    //             // setIsLoading(false);
    //         });
    // });

    // const hasAlerts = async (alertUrl) => {
    //     //setIsLoading(true);
    //     axios({
    //         url: alertUrl,
    //     }).then((response) => {
    //         const data = response.data;
    //         //console.log("dataaaaaaaaaaaaa", data);

    //         if (data.length > 0) {
    //             //console.log("yeeees");
    //             return "nav__item--active";
    //         }
    //         // console.log("hola");
    //         // console.log("cantidad", response.data);
    //         //setAlert(response.data);
    //     });

    //     // console.log("alertUrl", alertUrl);
    //     // return alertUrl;
    // };

    return (
        <div className="nav">
            <NavLink className="nav__item" to="/">
                <div className="alert__icon alert__btn">
                    <div className="icon icon--list" />
                </div>
            </NavLink>
            <NavLink className="nav__item" to="/Fallas">
                <div className="alert__icon alert__btn">
                    <div className="icon icon--failed" />
                </div>
            </NavLink>
            <NavLink className={`nav__item`} to="/Open">
                <div className="alert__icon alert__btn">
                    <div className="icon icon--open" />
                </div>
            </NavLink>
        </div>
    );
};

export default Navigation;

{
    /* <NavLink className={`nav__item ${hasAlerts(alertsOpenUrl)}`} to="/Open"></NavLink> */
}
