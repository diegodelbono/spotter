import React, { useEffect, useState } from "react";
import Timer from "../timer/Timer";

const ModalSos = () => {
    // const [showModal, setshowModal] = useState(true);

    // useEffect(() => {
    //     setTimeout(function () {
    //         setshowModal(false);
    //     }, 5000);
    // }, []);

    // fecha y hora, Edificio, Apartamento, Nombre y apellido
    return (
        <>
            {/* {showModal && ( */}
            <div className={`modal alert--sos`}>
                <div>
                    <h2 className="font-base">Diego Delbono</h2>
                    <p className="font-large">Be Biarritz, Roque Graseas 893 / 405</p>
                    <p className="font-large">21/11/2022 - 21:15hs</p>
                </div>
                <div className="alert__item">{/* <Timer timer={time} onChange={onTimerChange} /> */}</div>
                <div className="alert__icon alert__btn js-modal">
                    <div className="icon icon--close" />
                </div>
            </div>
            {/* )} */}
        </>
    );
};

export default ModalSos;
