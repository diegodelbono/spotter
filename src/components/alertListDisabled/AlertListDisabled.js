import React, { useState, useEffect } from "react";
import axios from "axios";
import AlertDisabled from "../alertDisabled/AlertDisabled";
import Loading from "../loading/Loading";

const AlertListDisabled = ({ url, actions }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState([]);

  function connectWithApi() {
    axios({
      url: url,
    })
      .then((response) => {
        setAlert(response.data);
      })
      .catch((error) => {
        console.log("error");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    connectWithApi();
    const interval = setInterval(() => {
      connectWithApi();
      setIsLoading(false);
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="list">
      {isLoading && <Loading />}
      {alert
        .sort((a, b) => (a.event_date > b.event_date ? -1 : 1))
        .map((item) => (
          <AlertDisabled
            key={item.event_id}
            name={item.event_client}
            severity={item.event_severity}
            date={item.event_date}
            id={item.event_id}
            setAlert={setAlert}
            alert={alert}
            item={item}
            {...item}
          />
        ))}
    </div>
  );
};

export default AlertListDisabled;
