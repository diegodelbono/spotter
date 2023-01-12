import React from "react";
import moment from "moment";
import axios from "axios";

const AlertDisabled = ({ name, date, id, alert, setAlert, item }) => {
  const underClick = async () => {
    const alerts = alert.filter((i) => i.event_id !== item.event_id);
    setAlert(alerts);

    const json = {
      event_id: id,
    };

    console.log("id", id);

    const request = axios
      .post("http://api.paneles.spotter.uy:8081/alarmashik/api/panelevent/zabbix/pause/", json)
      .then((request) => item.id)
      .catch((error) => {
        console.log("error", error);
      });
  };

  const finalMomentDay = moment(date).format("DD MM YYYY, h:mma");
  return (
    <>
      <div className="list__item">
        <div className="alert alert--disabled">
          <div className="alert__item">
            <h2 className="alert__title font-large">{name}</h2>
          </div>
          <div className="alert__item">
            <div className="time font-large font-bold">
              <div className="time__item">
                <span className="alert-tag alert-tag--inline">Sin conexión</span>
                <span className="number">{finalMomentDay}</span>
                <div onClick={() => underClick()} className="alert__close">
                  <div className="icon icon--close" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertDisabled;
