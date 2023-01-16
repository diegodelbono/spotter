import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalSos = ({ url }) => {
  const [modal, setModal] = useState([]);

  function connectWithApi() {
    axios({
      url: url,
    })
      .then((response) => {
        setModal(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  useEffect(() => {
    connectWithApi();
    const interval = setInterval(() => {
      connectWithApi();
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const underClick = async (item) => {
    const modals = modal.filter((i) => i.id !== item.id);
    setModal(modals);

    const request = axios
      .post(`http://api.paneles.spotter.uy:8081/alarmashik/api/app/sos/${item.id}/hide/`)
      .then((request) => item.id)
      .catch((error) => {
        console.log("error", error);
      });
  };

  const item = "diego";

  return (
    <>
      {modal.map((item) => (
        <div className={`modal alert--sos`} key={item.id}>
          <div className="modal__container">
            <div className="modal__figure">
              <figure className="figure">{item.imagen && <img src={`data:image/jpeg;base64,${item.imagen}`} />}</figure>
            </div>
            <div className="modal__content">
              <div class="modal__item">
                <h2 className="font-base">
                  <span className="tag">Nombre: </span>
                  {item.nombre} {item.apellido}
                </h2>
              </div>
              <div class="modal__item">
                <p className="font-large">
                  <span className="tag">Tel:</span>
                  {item.telefono}
                </p>
              </div>
              <div class="modal__item">
                <p className="font-large">
                  <span className="tag">Edificio: </span>
                  {item.edificio} - {item.apartamento}
                </p>
              </div>
            </div>
          </div>
          <div className="alert__icon alert__btn js-modal" onClick={() => underClick(item)}>
            <div className="icon icon--close" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ModalSos;
