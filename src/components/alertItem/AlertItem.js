import React, { useState } from "react";
import AlertModal from "../alertModal/AlertModal";
import Timer from "../timer/Timer";

const AlertItem = ({ zone_name, client_name, trigger_date_time, id, onClick, wasDisplayed, setDisplayed }) => {
    const [alertClass, setAlertClass] = useState("caution");
    const [display, setDisplay] = useState(false);

    function onTimerChange(newTime) {
        const maxAllowMin = 5;
        const mediumAllowMin = 3;

        if (newTime.h > 0) {
            setAlertClass("danger");
            if (!wasDisplayed) {
                console.log("wasDisplayed 1 ", wasDisplayed);
                setDisplay(true);
                setDisplayed();
            }
            return;
        }
        if (newTime.m >= maxAllowMin) {
            setAlertClass("danger");
            if (!wasDisplayed) {
                console.log("wasDisplayed 2", wasDisplayed);
                setDisplay(true);
                setDisplayed();
            }
            return;
        }

        setDisplay(false);

        if (newTime.m >= mediumAllowMin) {
            setAlertClass("warning");
            return;
        }

        setAlertClass("caution");
    }

    return (
        <>
            <div className="list__item">
                <div className={`alert alert--${alertClass}`}>
                    <div className="alert__item">
                        <div className="alert__icon">
                            <div className="font-large font-bold">!</div>
                        </div>
                        <h2 className="alert__title font-large">
                            {client_name} - <span className="font-bold">{zone_name}</span>
                        </h2>
                    </div>

                    <div className="alert__item">
                        <Timer timer={trigger_date_time} onChange={onTimerChange} />
                        <div className="alert__icon alert__btn" onClick={() => onClick(id)}>
                            <div className="icon icon--close" /> cliente
                        </div>
                        <div className="alert__icon alert__btn" onClick={() => onClick(id)}>
                            <div className="icon icon--close" /> fallo
                        </div>
                    </div>
                </div>
            </div>

            {display && (
                <AlertModal
                    id={id}
                    status={alertClass}
                    client={client_name}
                    zone={zone_name}
                    time={trigger_date_time}
                    onTimerChange={onTimerChange}
                />
            )}
        </>
    );
};

export default AlertItem;
