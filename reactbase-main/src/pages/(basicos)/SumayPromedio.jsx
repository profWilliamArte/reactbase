import { useState } from "react";

const SumayPromedio = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [suma, setSuma] = useState(0);
    const [promedio, setPromedio] = useState(0);

    const handleSumar = () => {
        const total = count1 + count2;
        setSuma(total);
        setPromedio(total / 2); // Calcula el promedio al sumar
    };

    const handleLimpiar = () => {
        setCount1(0);
        setCount2(0);
        setSuma(0);
        setPromedio(0);
    };

    return (
        <div className="container">
            <h3 className="text-center py-4">Suma y Promedio</h3>

            <div className="col-md-3 mx-auto">
                <div className="form">
                    <div className="form-group">
                        <input 
                            type="number" 
                            className="form-control my-2" 
                            placeholder="Ingrese el primer valor" 
                            value={count1} 
                            onChange={(e) => setCount1(parseFloat(e.target.value) || 0)} // Asegura que sea un número
                        />
                        <input 
                            type="number" 
                            className="form-control my-2" 
                            placeholder="Ingrese el segundo valor" 
                            value={count2} 
                            onChange={(e) => setCount2(parseFloat(e.target.value) || 0)} // Asegura que sea un número
                        />
                    </div>
                    <div className="form-group mt-5">
                        <label className="form-label text-center">Suma: {suma}</label>
                        <input 
                            type="text" 
                            className="form-control my-2 bg-dark text-light text-center" 
                            placeholder="Suma" 
                            value={suma} 
                            readOnly
                        />
                    
                    <label className="form-label text-center">Promedio: {promedio}</label>
                        <input 
                            type="text" 
                            className="form-control my-2  bg-dark text-light text-center" 
                            placeholder="Promedio" 
                            value={promedio} 
                            readOnly
                        />
                    
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-primary mx-2" onClick={handleSumar}>Procesar</button>
                        <button className="btn btn-danger " onClick={handleLimpiar}>Limpiar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SumayPromedio;
