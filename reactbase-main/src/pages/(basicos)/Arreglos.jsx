import { useState } from "react";

const Arreglos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cursos = [
        {
            descripcion: "¡Este es el mejor Editor de Código que he utilizado jamás!",
            tema: "VsCode",
        },
        {
            descripcion: "HTML es la columna vertebral del desarrollo web.",
            tema: "HTML",
        },
        {
            descripcion: "CSS hace que las páginas web sean hermosas y responsivas.",
            tema: "CSS",
        },
        {
            descripcion: "JavaScript te permite crear aplicaciones web dinámicas.",
            tema: "JavaScript",
        },
        {
            descripcion: "Bootstrap es un framework CSS que facilita el diseño responsivo.",
            tema: "Bootstrap",
        },
        {
            descripcion: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
            tema: "React",
        },
        {
            descripcion: "Las API permiten la comunicación entre diferentes aplicaciones y servicios.",
            tema: "API",
        },
    ];
    

    const handlePrevClick = () => {
        setCurrentIndex(
            (currentIndex + cursos.length - 1) % cursos.length
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % cursos.length);
    };

    return (
        <div className="container text-center mt-5">
            <div className="testimonials-quote mb-3">
                <div className="bg-light text-black rounded shadow">
                     <h2 className="p-3">
                      {cursos[currentIndex].tema}
                    </h2>
                    <h3 className="py-4">{cursos[currentIndex].descripcion}</h3>

                </div>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <button onClick={handlePrevClick} className="btn btn-info">Anterior</button>
                <button onClick={handleNextClick} className="btn btn-info">Siguiente</button>
            </div>
        </div>
    );
}

export default Arreglos;
