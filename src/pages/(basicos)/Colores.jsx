import { useState } from "react";


const Colores = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("#1b1b1b");
    const [borderColor, setBorderColor] = useState("#000");
 

    function handleClick() {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setBorderColor(borderColor === "#000" ? "#ffa31a" : "#000");
      
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
       
  </div>
  )
}

export default Colores