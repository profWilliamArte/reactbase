import { useState } from "react";
import { useContador } from './useContador';

const Contador2 = () => {
    const [contador, setContador] = useState(0);
    const MAX_CLICKS = 10;
    const [mensaje, setMensaje] = useState("");


    const [contador2, setContador2] = useState({
        valor: 0,
        ultimaAccion: "inicio"
    });



    const { contador3, incrementar, decrementar, resetear } = useContador();
    return (
        <div className='container'>
            <h3 className='py-4'>useState</h3>
            <h3 className='py-4 '>const [estado, setEstado] = useState(valorInicial);</h3>
            <h5>
                useState es un Hook que te permite agregar estado (state) a componentes funcionales en React. Con este Hook puedes declarar una variable de estado y una función para actualizarla.
            </h5>
            <h4 className='text-center py-4'>contador 1 Has hecho clic en el  {contador} veces</h4>
            <h4 className='text-center py-4'>contador 2 Has hecho clic en el  {contador2.valor} veces</h4>


            <div>
                <button className='btn btn-success' onClick={() => setContador(contador + 1)}>
                    sumar
                </button>
                <p>Contador simple</p>
            </div>
            <hr />
            <div>
                <button className='btn btn-danger' onClick={() => setContador(contador - 1)}>
                    restar
                </button>
                <p>Restar simple</p>
            </div>
            <hr />
            <div>
                <button className='btn btn-danger' onClick={() => {
                    if (contador > 0) {
                        setContador(contador - 1)
                    } else {
                        alert("Ya no puedes restar mas")
                    }
                }
                }>
                    restar 2
                </button>
                <p>Restar con una condición con un mensaje (alert)</p>
            </div>

            <hr />
            <div>
                <button className='btn btn-danger' onClick={() => setContador(contador - 1)} disabled={contador === 0}>
                    restar 3
                </button>
                <p>Restar con una condición deshabilita el boton</p>
            </div>
            <hr />
            <div>
                <button className='btn btn-success' onClick={() => {
                    if (contador < MAX_CLICKS) setContador(contador + 1);
                }} disabled={contador >= MAX_CLICKS}>
                    Sumar
                </button>
                <p>Agregar un valor máximo permitido (const MAX_CLICKS = 10;)</p>
            </div>
            <hr />

            <div>
                <button className='btn btn-info' onClick={() => setContador(0)}>

                    Reiniciar
                </button>
                <p>Reiniciar el contador</p>
            </div>
            <hr />
            <div>
                <button className='btn btn-info' onClick={() => {
                    setContador(0);
                    setMensaje("Contador reiniciado...");
                    setTimeout(() => setMensaje(""), 2000);
                }}>
                    Reiniciar
                </button>
                <p>Mostrar mensaje temporal tras reiniciar (con setTimeout)</p>
                {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            </div>
            <hr />
            <div>
                <button className='btn btn-success' onClick={() =>
                    setContador2({ valor: contador2.valor + 1, ultimaAccion: "sumar" })
                }>
                    Sumar
                </button>
                <button className='btn btn-danger' onClick={() =>
                    setContador2({ valor: contador2.valor + 1, ultimaAccion: "Restar" })
                }>
                    Restar
                </button>
                <button className='btn btn-info' onClick={() =>
                    setContador2({ valor: 0, ultimaAccion: "Reiniciar" })
                }>
                    Reiniciar
                </button>
                <p>Última acción:<span className='fw-bold'> {contador2.ultimaAccion}</span></p>
            </div>
            <hr />
            <div>
                <button className='btn btn-success' onClick={() => setContador(prev => prev + 1)}>
                    Sumar
                </button>
                <button className='btn btn-danger' onClick={() => setContador(prev => Math.max(0, prev - 1))}>
                    Restar
                </button>
                <button className='btn btn-info' onClick={() => setContador(1)}>
                    Reiniciar en 1
                </button>
                <p>Usar función dentro de setContador para evitar bugs por asincronía</p>
                <p><b>prev</b> es el valor anterior del estado (en este caso, el valor actual de contador) antes de hacer la actualización.</p>
                <p>La función <b>Math.max()</b> devuelve el número más grande entre los valores que le pasas.</p>
            </div>
            <hr />
            <div>
                <p style={{ color: contador > 5 ? "green" : "white" }}>
                    Has hecho clic {contador} veces
                </p>
                <p>Cambiar estilo según el estado</p>
            </div>
            <hr />
            <div>
                <p>Contador3: {contador3} ee</p>
                <button className="btn btn-success" onClick={incrementar}>Sumar</button>
                <button className="btn btn-danger" onClick={decrementar}>Restar</button>
                <button className="btn btn-info" onClick={resetear}>Reset</button>
                <p>Modularización del código. Separar lógica en un custom hook:</p>
            </div>
        </div>
    )
}

export default Contador2