import React, { useState, useEffect } from "react";
import AlertItem from "../alertItem/AlertItem";
import axios from "axios";

const baseURL = "http://api.paneles.spotter.uy:8081/alarmashik/api/panelevent/";

const AlertList = () => {
    const [alert, setAlert] = useState([]);
    const [displayedAlerts, setDisplayedAlerts] = useState([]);

    function wasAlertDisplayed(id) {
        console.log("displayedAlerts", displayedAlerts);
        console.log("displayedAlerts -- id", id);
        return displayedAlerts.some((x) => x === id);
    }

    useEffect(() => {
        axios({
            url: "http://api.paneles.spotter.uy:8081/alarmashik/api/panelevent/",
            // responseType: "json",
            // credentials: "include",
            // mode: "no-cors",
            // headers: {
            //     Accept: "application/json; odata=verbose",
            // },
        })
            .then((response) => {
                setAlert(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // console.log("response", response);

    function moveItem(id) {
        console.log("Borrar-->", id);
        const alert = { title: id };
        console.log(alert.title);
        axios
            .post("http://api.paneles.spotter.uy:8081/alarmashik/api/panelevent/pause/", alert)
            .then((response) => id)
            .catch((error) => {
                console.log(error);
            });
    }

    function markAlertAsDisplayed(id) {
        if (!wasAlertDisplayed(id)) {
            //console.log("markAlertAsDisplayed --  true");
            setDisplayedAlerts((prev) => {
                console.log("prev", prev);
                return [...prev, id];
            });
        }
    }

    return (
        <div className="list">
            {alert
                .sort((a, b) => (a.trigger_date_time > b.trigger_date_time ? 1 : -1))
                .map((item) => (
                    <AlertItem
                        wasDisplayed={wasAlertDisplayed(item.ip_address + "-" + item.zone)}
                        setDisplayed={() => markAlertAsDisplayed(item.ip_address + "-" + item.zone)}
                        id={item.ip_address + "-" + item.zone}
                        {...item}
                        onClick={() => {
                            moveItem(item.ip_address + "-" + item.zone);
                        }}
                    />
                ))}
        </div>
    );
};

export default AlertList;
