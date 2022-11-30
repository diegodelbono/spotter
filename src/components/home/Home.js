import React from "react";
import AlertList from "./../alertList/AlertList";
import { alertsBaseUrl, alertListDisabled } from "../../utils/Utils";
import AlertListDisabled from "../alertListDisabled/AlertListDisabled";
import ModalSos from "../modalSos/ModalSos";

const Home = () => {
    return (
        <>
            {/* <ModalSos /> */}
            <AlertListDisabled url={alertListDisabled} />
            <AlertList url={alertsBaseUrl} actions={true} />
        </>
    );
};

export default Home;
