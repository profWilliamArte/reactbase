import { useState } from "react";


const Colores = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [borderColor, setBorderColor] = useState("#000");

    const [backgroundColor2, setBackgroundColor2] = useState("white");
    const [textColor2, setTextColor2] = useState("#1b1b1b");
    const [borderColor2, setBorderColor2] = useState("#000");
 

    function handleClick() {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setBorderColor(borderColor === "#000" ? "#ffa31a" : "#000");
      
      }
      function handleClick2() {
        setBackgroundColor2(backgroundColor2 === "white" ? "#1b1b1b" : "white");
        setTextColor2(textColor2 === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setBorderColor2(borderColor2 === "#000" ? "#ffa31a" : "#000");
      
      }
    
  return (
    <div className="container py-5 text-center">
           <button className="btn btn-info" onClick={handleClick}>
              {backgroundColor == "#1b1b1b" ? "Thema Claro" : "Tema Oscuro"}
          </button>
         
          <section className="py-5 my-5 rounded " style={{ backgroundColor, color: textColor, border: `5px solid ${borderColor}` }}>
              <section className="content">
                <h1>
                   Bienvenido a <br /> React
                </h1>
              </section>
          </section>




          <button className="btn btn-info" onClick={handleClick2}>
              {backgroundColor2 == "#1b1b1b" ? "Thema Claro 2" : "Tema Oscuro 2"}
          </button>
          <section className="py-5 my-5 rounded " style={{ backgroundColor2, color: textColor2, border: `5px solid ${borderColor2}` }}>
              <section className="content">
                <h1>
                   Bienvenido2 a <br /> React
                </h1>
              </section>
          </section>
  </div>
  )
}

export default Colores