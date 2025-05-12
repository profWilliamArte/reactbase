import { useState } from "react"



const Contador = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)




  const incrementar = () => {
      setCount2(count2 + 1);
  };

  const decrementar = () => {
    if(count2 > 0){
      setCount2(count2 - 1);
    }
      
  };

  
  return (
    <>
        <div className="container">
            <h3 className="text-center my-4">Contadores</h3>
            <div className="row">
              <div className="col-md-6 border p-5">
                <h4 className="text-center my-5">Contador 1 : {count1}</h4>
                <div className="text-center">
                    <button onClick={() => setCount1(count1 + 1)} className="btn btn-success me-4">Incrementar</button>         
                    <button onClick={() => setCount1(count1 - 1)} className="btn btn-danger">Decrementar</button>           
                </div>
              </div>
              <div className="col-md-6 border p-5">
                <h4 className="text-center my-5">Contador 2: {count2}</h4>
                <div className="text-center">
                    <button onClick={incrementar} className="btn btn-success me-4">
                        Incrementar
                    </button>
                    <button onClick={decrementar} className="btn btn-danger">
                        Decrementar
                    </button>
                </div>
              </div>

            </div>
           
        </div>

    </>
  )
}

export default Contador