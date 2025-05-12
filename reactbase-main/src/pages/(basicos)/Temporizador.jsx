import { useState, useEffect } from 'react';


const Temporizador = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setSeconds(0);
    };

    return (
        <div className="container">
            <h3 className="text-center my-5">Temporizador</h3>
            <div className="row justify-content-center">
                <div className="col-md-6 text-center border p-5">
                    <h4>{seconds} segundos</h4>
                    <div className="mt-4">
                        <button onClick={handleStart} className="btn btn-success me-2">Iniciar</button>
                        <button onClick={handlePause} className="btn btn-warning me-2" disabled={!isActive || isPaused}>Pausar</button>
                        <button onClick={handleReset} className="btn btn-danger">Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temporizador;
