import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalSos = ({ url }) => {
  const [modal, setModal] = useState([]);

  //  const fileInputRef = useRef();
  //  const isFile = value && typeof value.name === "string";
  //  const isValueValid = value && value.data && value.contentType;

  // fetch(`data:${value.contentType};base64,${value.data}`)
  //   .then((res) => res.blob())
  //   .then((blob) => {
  //     onChange(new File([blob], value.fileName));
  //   });

  // if (!isFile) {
  //   if (isValueValid) {
  //     fetch(`data:${value.contentType};base64,${value.data}`)
  //       .then((res) => res.blob())
  //       .then((blob) => {
  //         onChange(new File([blob], value.fileName));
  //       });
  //   } else if (value !== null) {
  //     onChange(null);
  //   }
  // }

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

  return (
    <>
      {modal.map((item) => (
        <div className={`modal alert--sos`} key={item.id}>
          <div className="modal__container">
            <div className="modal__figure">
              <figure className="figure">
                <img src={`data:image/jpeg;base64,${item.imagen}`} />
                {/* <img src={URL.createObjectURL(`data:image/jpeg;base64,${this.state.image}`)} /> */}
              </figure>
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

          {/* <View
            className="avatar"
            style={
              isFile
                ? {
                    backgroundImage: `url(${URL.createObjectURL(value)})`,
                    backgroundSize: "cover",
                  }
                : null
            }
          /> */}
        </div>
      ))}
    </>
  );
};

export default ModalSos;
