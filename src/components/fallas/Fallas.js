import React from "react";
import AlertList from "./../alertList/AlertList";
import { alertsFailedUrl } from "../../utils/Utils";

const Fallas = () => {
    return <AlertList url={alertsFailedUrl} actions={false} />;
};

export default Fallas;
