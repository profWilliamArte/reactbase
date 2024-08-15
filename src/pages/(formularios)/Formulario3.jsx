import { useState } from 'react';



const Formulario3 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
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
        setErrors({
            ...errors,
            [name]: '' // Limpia el mensaje de error al cambiar el valor
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio.';
        }
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        } else if (!/[A-Z]/.test(formData.password)) { // Verifica si hay al menos una mayúscula
            newErrors.password = 'La contraseña debe contener al menos una letra mayúscula.';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) { // Verifica si hay al menos un carácter especial
            newErrors.password = 'La contraseña debe contener al menos un carácter especial.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
    };
    
    

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario
        if (validateForm()) {
            alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nContraseña: ${formData.password}`);
        }
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center">Formulario con Validación Básica</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ingresa tu nombre"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingresa tu correo electrónico"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario3;
