import { useState } from 'react'

const Formulario2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value // Actualiza el estado del formulario
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nContraseña: ${formData.password}`);
    };
  return (
    <div className="container mt-5">
            <h3 className="text-center">Formulario con Múltiples Campos</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange} // Maneja el cambio en el input
                        placeholder="Ingresa tu nombre"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingresa tu correo electrónico"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <div className="mt-3">
                <h5>Datos ingresados:</h5>
                <p>Nombre: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Contraseña: {formData.password}</p>
            </div>
        </div>
  )
}

export default Formulario2