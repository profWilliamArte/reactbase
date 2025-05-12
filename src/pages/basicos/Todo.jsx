import { useState } from "react";

function generateId() {
    return Math.floor(Math.random() * 10);
  }
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");


    const handleSubmit = () => {
        setTodos((todos) =>
          todos.concat({
            text: input,
            id: generateId(),
          })
        );
        setInput("");
      };

      const removeTodo = (id) => {
        const confirmar= confirm("¿Estas seguro de que deseas Eliminar?");
        if (confirmar){
          setTodos((todos) => todos.filter((t) => t.id !== id));
        }
       
      }
        
  return (
    <div className="container">
        <h1 className="text-center my-5">Todo</h1>
        
   


        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="nuevo todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-outline-secondary" type="button"  onClick={handleSubmit}>Agregar</button>
        </div>

        <div className="">
          {todos.map(({ text, id }) => (
            <div key={id} className="d-flex justify-content-between align-items-center bg-dark  my-2 p-2">
              <span className="display-6" >{text}</span>
              <button className="btn btn-danger ms-2" onClick={() => removeTodo(id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
   
        
    </div>
  )
}

export default Todo