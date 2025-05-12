import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const FormularioContacto = () => {
    const form = useRef();

    const [successMessage, setSuccessMessage] = useState('');


    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs
          .sendForm('service_swlni1q', 'template_swqxegs', form.current, {
            publicKey: '-v6q-bAs_nS5kWJCD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccessMessage('Enviado con exito!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              setSuccessMessage('Error al enviar');
            },
          );
      };
    return (
        <div className="container mt-5">
            <h3 className="text-center">Formulario de Contacto</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="user_name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo</label>
                    <input type="email" className="form-control" name="user_email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" name="message" rows="6" required></textarea>
                </div>
                <div className="mb-2 text-end">
                    <button type="submit" className="btn btn-success">Enviar</button>
                </div>
                <div className="mb-2 text-center">
                   
                    {successMessage && 
                        <div className='alert alert-success'>
                            <h3>{successMessage}</h3>
                        </div>
                    }
                    </div>
                   
                
            </form>

          
        </div>
    );
};

export default FormularioContacto;

/*
npm install --save @emailjs/browser

Subject
Recibiste un nuevo mensaje de  {{user_name}}

Content
Saludos cordiales {{user_name}},

Tienes un nuevo mensaje de  {{user_name}}:

{{message}}

Correo emisor {{user_email}}

Niestros mejores deseos por parte de 

Curso de Frontend

Arsistema

*/
