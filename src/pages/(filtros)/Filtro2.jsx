import { useState } from "react";
import tips from "../../datos/tips"; // Asegúrate de que cada 'tip' tenga una propiedad 'categoria'
import Card from "./Card";

const Filtro2 = () => {
    const [lista, setLista] = useState(tips);
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

    // Extraer categorías únicas de los tips
    const categorias = [...new Set(tips.map(tip => tip.nombre))];
    console.log(categorias); // Para depuración

    const clearFilter = () => {
        setLista(tips); // Restablecer la lista a su estado original
        setCategoriasSeleccionadas([]); // Limpiar categorías seleccionadas
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategoriasSeleccionadas([...categoriasSeleccionadas, value]);
        } else {
            setCategoriasSeleccionadas(categoriasSeleccionadas.filter(categoria => categoria !== value));
        }
        console.log(categoriasSeleccionadas);
    };

    const filterByCategory = () => {
        if (categoriasSeleccionadas.length > 0) {
            setLista(tips.filter(tip => categoriasSeleccionadas.includes(tip.nombre)));
        } else {
            setLista(tips); // Si no hay categorías seleccionadas, mostrar todos los tips
        }
    };

    return (
        <div className="container">
            <div className="text-center">
                <h3 className="py-4">Filtro II <span className="small">({lista.length})</span></h3>
                <div className="d-flex justify-content-center py-3">
                    {categoriasSeleccionadas.map((categoria, index) => (
                        <span key={index} className="badge bg-primary me-2">{categoria}</span>
                    ))}  
                </div>
            </div>

            {lista.length === 0 ? (
                <p className="text-center">No hay datos disponibles.</p>
            ) : (
                <div className="row">
                    <div className="col-md-2">
                        <h4>Categorías</h4>
                        {categorias.map((categoria, index) => (
                            <div key={index}>
                                <input type="checkbox" value={categoria} onChange={handleCheckboxChange} className="form-check-input my-2 me-2" />
                                <label> {categoria}</label>
                            </div>
                        ))}
                        <button type="button" className="btn btn-secondary mt-2" onClick={filterByCategory}>Filtrar por Categoría</button>
                        <button type="button" className="btn btn-danger mt-2" onClick={clearFilter}>
                            Quitar Filtros
                        </button>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {lista.map((tip, index) => (
                                <Card key={index} item={tip} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filtro2;
