
import cusros from "../../datos/cursos";
import '../../css/listacursos.css'; // Asegúrate de que la ruta sea correcta

const Listacursos = () => {
    return (
        <div className="container">
            <h3 className="text-center py-4">Lista de Cursos</h3>
            {cusros.map((curso, index) => (
                <div key={index} className="curso-card border p-3 my-3 rounded shadow">
                    <h1>{curso.tema}</h1>
                    <h2>{curso.descripcion}</h2>
                </div>
            ))}
        </div>
    );
}

export default Listacursos;
