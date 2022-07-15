import React, { useEffect, useState } from "react";
import Timer from "../timer/Timer";

const AlertModal = ({ id, status, client, zone, time, onTimerChange }) => {
    const [showModal, setshowModal] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            setshowModal(false);
        }, 500000);
    }, []);
    return (
        <>
            {showModal && (
                <div className={`modal alert--${status}`}>
                    <div>
                        <h2 className="alert__title font-large">
                            {client} <br />
                            <span className="font-bold">{zone}</span>
                        </h2>
                    </div>
                    <div className="alert__item">
                        <Timer timer={time} onChange={onTimerChange} />
                    </div>
                    <div className="alert__icon alert__btn js-modal" onClick={() => setshowModal(!showModal)}>
                        <div className="icon icon--close" />
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertModal;
