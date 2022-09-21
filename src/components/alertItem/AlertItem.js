import React, { useState, useEffect } from "react";
import AlertModal from "../alertModal/AlertModal";
import Timer from "../timer/Timer";
import axios from "axios";
import moment from "moment";

import { FAILED, OPEN } from "../../utils/Utils";

const AlertItem = ({
    zone_name,
    client_name,
    trigger_date_time,
    item,
    wasDisplayed,
    setDisplayed,
    alert,
    setAlert,
    actions,
    event_paused_date,
}) => {
    const [alertClass, setAlertClass] = useState("caution");
    const [display, setDisplay] = useState(false);

    function onTimerChange(newTime) {
        const maxAllowMin = 5;
        const mediumAllowMin = 3;
        const endAllowMin = 7;

        if (newTime.h > 0) {
            setAlertClass("danger");
            if (!wasDisplayed) {
                setDisplay(true);
                setDisplayed();
            }
            return;
        }
        if (newTime.m >= maxAllowMin) {
            setAlertClass("danger");
            if (!wasDisplayed) {
                if (newTime.m < endAllowMin) {
                    setDisplay(true);
                    setDisplayed();
                }
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

    const underClick = async (type) => {
        const alerts = alert.filter((i) => i.id !== item.id);
        setAlert(alerts);

        function identifyType() {
            if (type == 1) {
                return "sensor en falla";
            } else {
                return "abierto por el cliente";
            }
        }

        const json = {
            event_notes: identifyType(),
            event_paused_type: type,
            event_zone: item.zone,
            ip_address: item.ip_address,
        };

        console.log("json", json);

        const request = axios
            .post("http://api.paneles.spotter.uy:8081/alarmashik/api/panelevent/pause/", json)
            .then((request) => item.id)
            .catch((error) => {
                console.log("error", error);
            });
    };

    // const initial
    const finalMomentDay = moment(event_paused_date).format("DD MM YYYY, h:mma");

    return (
        <>
            <div className="list__item">
                <div className={`alert ${actions ? `alert--${alertClass}` : "alert--default"}`}>
                    <div className="alert__item">
                        <div className="alert__icon">
                            <div className="font-large font-bold">!</div>
                        </div>
                        <h2 className="alert__title font-large">
                            {client_name} - <span className="font-bold">{zone_name}</span>
                        </h2>
                    </div>

                    {actions && (
                        <div className="alert__item">
                            <Timer timer={trigger_date_time} onChange={onTimerChange} />
                            <div className="alert__icon alert__btn" onClick={() => underClick(OPEN)}>
                                <div className="icon icon--open" />
                            </div>
                            <div className="alert__icon alert__btn" onClick={() => underClick(FAILED)}>
                                <div className="icon icon--failed" />
                            </div>
                        </div>
                    )}
                    {!actions && (
                        <div className="alert__item">
                            <div className="time font-large font-bold">
                                <div className="time__item">
                                    <span className="number">{finalMomentDay}</span> <span className="alert-tag">Pausado</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {display && (
                <AlertModal
                    id={item.id}
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
