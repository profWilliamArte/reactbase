import { useState } from "react";
import tips from "../../datos/tips";
import Card from "./Card";

const Filtro1 = () => {
    const [lista, setLista] = useState(tips);
    const [buscar, setBuscar] = useState('');

    // Validación de datos antes del return

    const handleChange = (e) => {// solo filtra por nombre
        setLista(tips.filter((tip) => tip.nombre.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const handleChange2 = (e) => { // filtra por nombre y descripción
        const searchTerm = e.target.value.toLowerCase(); // Convertir a minúsculas para una búsqueda case-insensitive
        setLista(tips.filter((tip) =>
            tip.nombre.toLowerCase().includes(searchTerm) ||
            tip.descripcion.toLowerCase().includes(searchTerm)
        ));
    }

    const handleChange3 = (e) => {
        setBuscar(e.target.value);
    };
    const handleFilter = () => {
        setLista(tips.filter((tip) =>
            tip.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
            tip.descripcion.toLowerCase().includes(buscar.toLowerCase())
        ));
    };
    const clearFilter = () => {
        setLista(tips); // Restablecer la lista a su estado original
    };



    return (
        <div className="container">
            <div className="text-center">
                <h3 className="py-4">Filtro I <span className="small">({lista.length})</span></h3>
                <button type="button" className="btn btn-success ms-2" onClick={clearFilter}>Limpiar</button>
            </div>
 

            <div className="d-flex my-3">

                <form className="col-3 mx-auto d-lg-flex py-3">
                    <input type="text" onChange={handleChange} placeholder="Filtra por Nombre" className="form-control" />

                </form>
                <form className="col-3 mx-auto d-lg-flex py-3">
                    <input type="text" onChange={handleChange2} placeholder="Filtra por Nombre y Descripción" className="form-control" />

                </form>
                <form className="col-3 mx-auto d-lg-flex py-3">
                    <input type="text" onChange={handleChange3} placeholder="Filtrar con el boton" className="form-control" />
                    <button type="button" className="btn btn-info ms-2" onClick={handleFilter}>Filtrar</button>
                </form>

            </div>
            <div className="row">
            {lista.length === 0 ? (
                <p className="text-center">No hay datos disponibles.</p>
            ) : (lista.map((tip, index) => (
                <Card key={index} item={tip} />
            ))
            )}
            </div>
        </div>
    );
};

export default Filtro1;


