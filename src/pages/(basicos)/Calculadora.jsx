import { useState } from "react";


const Calculadora = () => {
    const [inputvalue, setinputvalue] = useState("");

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    var respuesta = eval(inputvalue);
    setinputvalue(respuesta);
  }

  function clear() {
    setinputvalue("");
  }

  return (
    <div className="container  py-4">

  <form >
    

    <h3 className="text-center">Calculadora</h3>
  <div className="row">
    <div className="col-6 mx-auto">
    <input type="text" className="form-control mb-4 " value={inputvalue} readOnly />
    
    <div className="row">
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => clear()}>C</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("/")}>/</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("*")}>*</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("-")}>-</span>
      </div>
    </div>

    <div className="row my-2">
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("7")}>7</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("8")}>8</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("9")}>9</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("+")}>+</span>
      </div>
    </div>

    <div className="row my-2">
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("4")}>4</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("5")}>5</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("6")}>6</span>
      </div>
      <div className="col-3">
        <span className="btn btn-success w-100" onClick={() => calculate()}>=</span>
      </div>
    </div>

    <div className="row my-2">
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("1")}>1</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("2")}>2</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("3")}>3</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("0")}>0</span>
      </div>
    </div>

    <div className="row my-2">
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display("00")}>00</span>
      </div>
      <div className="col-3">
        <span className="btn btn-info w-100" onClick={() => display(".")}>.</span>
      </div>
      <div className="col-6">
        <span className="btn btn-danger w-100" onClick={() => clear()}>C</span>
      </div>
    </div>
    </div>
    </div>
  </form>
</div>

  )
}

export default Calculadora