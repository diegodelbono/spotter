import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { alertsOpenUrlCount, alertsFailedUrlCount } from "../../utils/Utils";

const Navigation = () => {
    const [alertsOpenCount, setAlertsOpenCount] = useState(undefined);
    const [alertsFailedCount, setAlertsFailedCount] = useState(undefined);

    function connectWithApi(msg) {
        axios({
            url: alertsOpenUrlCount,
        })
            .then((response) => {
                setAlertsOpenCount(response.data.count);
            })
            .catch((error) => {
                console.log("error");
            });
    }

    useEffect(() => {
        connectWithApi();
        const interval = setInterval(() => {
            connectWithApi();
        }, 2000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return (
        <div className="nav">
            <NavLink className="nav__item" to="/">
                <div className="alert__icon alert__btn">
                    <div className="icon icon--list" />
                </div>
            </NavLink>
            <NavLink className={`nav__item`} to="/Fallas">
                <div className="alert__icon alert__btn">
                    {/* {setItemActives(stateItems)} */}
                    {/* ++++ {alertsFailedCount} ++++ */}
                    <div className="icon icon--failed" />
                </div>
            </NavLink>
            <NavLink className={`nav__item ${alertsOpenCount > 0 ? "nav__item--active" : ""}`} to="/Open">
                <div className="alert__icon alert__btn">
                    <span className="count">{alertsOpenCount}</span>
                    <div className="icon icon--open" />
                </div>
            </NavLink>
        </div>
    );
};

export default Navigation;
