import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confirmacion from './Confirmacion';
import Mensage from './Mensage';

function Dialogo() {
    const handleConfirm = () => {
        console.log('Confirmado');
        alert('Confirmado');
      };
    
      const handleCancel = () => {
        console.log('Cancelado');
        alert('Cancelado');
      };
      const handleClose = () => {
        console.log('Diálogo cerrado');
      };
  return (
    <div className='container'>
        <h1 className='text-center my-5'>Dialogos</h1>
        <div className='d-flex justify-content-center gap-4'>
            <Confirmacion
                title="Confirmar Acción"
                message="¿Estás seguro de que deseas Eliminar?"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
            <Mensage
                title="Mensaje de Éxito"
                message="¡La operación se realizó correctamente!"
                onClose={handleClose}
            />
      </div>
  </div>
  );
}

export default Dialogo;

