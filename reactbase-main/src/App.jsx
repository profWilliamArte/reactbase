import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contador from "./pages/(basicos)/Contador"
import Cronometro from "./pages/(basicos)/Cronometro"

import Todo from "./pages/(basicos)/Todo"
import Calculadora from "./pages/(basicos)/Calculadora"
import Inicio from "./pages/Inicio"
import Colores from "./pages/(basicos)/Colores"
import Arreglos from "./pages/(basicos)/Arreglos"
import Listacursos from "./pages/(basicos)/Listacursos"
import Formulario1 from "./pages/(formularios)/Formulario1"
import Formulario2 from "./pages/(formularios)/Formulario2"
import Formulario3 from "./pages/(formularios)/Formulario3"

import Temporizador from "./pages/(basicos)/Temporizador"
import Filtro1 from "./pages/(filtros)/Filtro1"
import Filtro2 from "./pages/(filtros)/Filtro2"
import FormularioContacto from "./pages/(formularios)/FormularioContacto"
import Listasimg from "./pages/(imagenes)/Listasimg"
import SumayPromedio from "./pages/(basicos)/SumayPromedio"
import Cargarimg from "./pages/(imagenes)/Cargarimg"

import Mostrarslider from "./pages/(imagenes)/Mostrarslider"
import Dialogos from "./pages/(otros)/Dialogos"



const App = () => {
  return (
    <div className="App">
    <BrowserRouter>

    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/sumarypromedio" element={<SumayPromedio/>} />

        <Route path="/temporizador" element={<Temporizador/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/calculadora" element={<Calculadora/>} />
        <Route path="/colores" element={<Colores/>} />
        <Route path="/arreglos" element={<Arreglos/>} />
        <Route path="/listacursos" element={<Listacursos/>} />


        <Route path="/filtro1" element={<Filtro1/>} />
        <Route path="/filtro2" element={<Filtro2/>} />  

        <Route path="/listasimg" element={<Listasimg/>} />  
        <Route path="/cargarimg" element={<Cargarimg/>} />  
        <Route path="/mostrarslider" element={<Mostrarslider/>} />  

        <Route path="/formulario1" element={<Formulario1/>} />
        <Route path="/formulario2" element={<Formulario2/>} />
        <Route path="/formulario3" element={<Formulario3/>} />
        <Route path="/formulario4" element={<FormularioContacto/>} />


        <Route path="/dialogos" element={<Dialogos/>} />

        <Route path="*" element={<Inicio/>} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App