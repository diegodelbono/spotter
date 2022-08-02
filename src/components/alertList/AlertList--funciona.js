import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertItem from "../alertItem/AlertItem";
import Loading from "../loading/Loading";

const AlertList = ({ url, actions }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState([]);
    const [displayedAlerts, setDisplayedAlerts] = useState([]);

    function wasAlertDisplayed(id) {
        return displayedAlerts.some((x) => x === id);
    }

    const [executing, setExecuting] = useState(false);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios({
    //         url: url,
    //     })
    //         .then((response) => {
    //             console.log("oooo");
    //             setAlert(response.data);
    //         })
    //         .catch((error) => {
    //             setIsLoading(false);
    //         });

    //     setTimeout(() => {
    //         setExecuting(!executing);
    //     }, 1000);
    // }, [executing]);

    useEffect(() => {
        setIsLoading(true);
        axios({
            url: url,
        })
            .then((response) => {
                setIsLoading(false);
                console.log("diego");
                setAlert(response.data);
            })
            .catch((error) => {
                console.log("error");
                console.log("nnn");
                // setIsLoading(false);
            });
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
                        // withoutModal
                        setAlert={setAlert}
                        alert={alert}
                        item={item}
                        {...item}
                    />
                ))}
        </div>
    );
};

export default AlertList;
