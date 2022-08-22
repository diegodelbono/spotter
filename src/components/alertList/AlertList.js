import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertItem from "../alertItem/AlertItem";
import Loading from "../loading/Loading";

const AlertList = ({ url, actions }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState([]);
    const [displayedAlerts, setDisplayedAlerts] = useState([]);

    function wasAlertDisplayed(id) {
        return displayedAlerts.some((x) => x === id);
    }

    function connectWithApi() {
        axios({
            url: url,
        })
            .then((response) => {
                setAlert(response.data);
            })
            .catch((error) => {
                console.log("error");
                setIsLoading(false);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        //console.log("00000000");
        //setIsLoading(true);
        connectWithApi();
        //console.log("11111111");
        //setIsLoading(false);
        //console.log("termino la con");
        const interval = setInterval(() => {
            connectWithApi();
            //console.log("3333");
            setIsLoading(false);
        }, 2000);

        return () => {
            //console.log("333");
            window.clearInterval(interval);
        };
    }, []);

    function markAlertAsDisplayed(id) {
        if (!wasAlertDisplayed(id)) {
            setDisplayedAlerts((prev) => {
                return [...prev, id];
            });
        }
    }

    return (
        <div className="list">
            {isLoading && <Loading />}
            {alert
                .sort((a, b) => (a.trigger_date_time > b.trigger_date_time ? 1 : -1))
                .map((item) => (
                    <AlertItem
                        key={item.id}
                        wasDisplayed={wasAlertDisplayed(item.id)}
                        setDisplayed={() => markAlertAsDisplayed(item.id)}
                        id={item.id}
                        actions={actions}
                        setAlert={setAlert}
                        alert={alert}
                        item={item}
                        {...item}
                    />
                ))}
            {/* {console.log("alert", alert)}
            {console.log("alert leng", alert.length)} */}
            {alert.length === 0 && <>No hay</>}
        </div>
    );
};

export default AlertList;
