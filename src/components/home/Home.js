import React from "react";
import AlertList from "./../alertList/AlertList";
import { alertsBaseUrl, alertListDisabled, alertModalList } from "../../utils/Utils";
import AlertListDisabled from "../alertListDisabled/AlertListDisabled";
import ModalSos from "../modalSos/ModalSos";

const Home = () => {
  return (
    <>
      <ModalSos url={alertModalList} />
      <AlertListDisabled url={alertListDisabled} />
      <AlertList url={alertsBaseUrl} actions={true} />
    </>
  );
};

export default Home;
