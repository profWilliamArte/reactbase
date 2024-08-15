import { useState } from 'react';

const Formulario1 = () => {
    const [name, setName] = useState(""); // Estado para almacenar el nombre

    const handleChange = (event) => {
        setName(event.target.value); // Actualiza el estado con el valor del input
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        alert(`Nombre ingresado: ${name}`); // Muestra el nombre ingresado
    };

  return (
    <div className="container mt-5">
            <h3 className="text-center">Formulario Controlado Simple</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <div className="mt-3">
                <h5>Nombre ingresado: {name}</h5> {/* Muestra el nombre en tiempo real */}
            </div>
        </div>
  )
}

export default Formulario1