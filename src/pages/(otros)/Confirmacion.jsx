import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Confirmacion = ({ title, message, onConfirm, onCancel }) => {
  const [showModal, setShowModal] = useState(false);

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    onConfirm(); // Ejecuta la función de confirmación pasada como prop
    closeDialog();
  };

  const handleCancel = () => {
    onCancel(); // Ejecuta la función de cancelación pasada como prop
    closeDialog();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openDialog}>
        {title}
      </button>

      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none'}} data-bs-theme="dark">
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
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleConfirm}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmacion;