import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mensage = ({ title, message, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
    onClose(); // Ejecuta la función de cierre pasada como prop
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openDialog}>
        {title}
      </button>

      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} data-bs-theme="dark">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={closeDialog}></button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-info" onClick={closeDialog}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensage;