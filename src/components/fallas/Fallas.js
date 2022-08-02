import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertList from "./../alertList/AlertList";
import { alertsFailedUrl } from "../../utils/Utils";

const Fallas = () => {
    return <AlertList url={alertsFailedUrl} actions={false} />;
};

export default Fallas;
