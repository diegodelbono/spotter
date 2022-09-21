import React from "react";
import AlertList from "./../alertList/AlertList";
import { alertsBaseUrl } from "../../utils/Utils";

const Home = () => {
    return <AlertList url={alertsBaseUrl} actions={true} />;
};

export default Home;
