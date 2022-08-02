import React from "react";
import AlertList from "../alertList/AlertList";
import { alertsOpenUrl } from "../../utils/Utils";

const Open = () => {
    return <AlertList url={alertsOpenUrl} actions={false} />;
};

export default Open;
