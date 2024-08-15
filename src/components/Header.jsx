import { Link } from "react-router-dom"

import logo from "../assets/react-2.svg"
const Header = () => {
  return (
    <header>
    <div className="container">
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#"><img src={logo} alt="" width={50} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to ="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
  
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Ejercicios Básicos
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to ="/contador" className="dropdown-item" href="#">Contador</Link></li>
                                <li><Link to ="/sumarypromedio" className="dropdown-item" href="#">Sumar y Promedio</Link></li>
                                <li><Link to ="/temporizador" className="dropdown-item" href="#">Temporizador</Link></li>
                                <li><Link to ="/todo" className="dropdown-item" href="#">Todo</Link></li>
                                <li><Link to ="/calculadora" className="dropdown-item" href="#">Calculadora</Link></li>
                                <li><Link to ="/colores" className="dropdown-item" href="#">Colores</Link></li>
                                <li><Link to ="/arreglos" className="dropdown-item" href="#">Arreglo</Link></li>
                                <li><Link to ="/listacursos" className="dropdown-item" href="#">Listar</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Filtros
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to ="/filtro1" className="dropdown-item" href="#">Filtro I</Link></li>
                                <li><Link to ="/filtro2" className="dropdown-item" href="#">Filtro II</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Imagenes
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to ="/listasimg" className="dropdown-item" href="#">Seleccionar una Imagen</Link></li>
                                <li><Link to ="/cargarimg" className="dropdown-item" href="#">Cargar una Imagen</Link></li>
                                <li><Link to ="/mostrarslider" className="dropdown-item" href="#">Slider</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Ejercicios Formularios
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to ="/formulario1" className="dropdown-item" href="#">Controlar un Campo</Link></li>
                                <li><Link to ="/formulario2" className="dropdown-item" href="#">Controlar varios Campo</Link></li>
                                <li><Link to ="/formulario3" className="dropdown-item" href="#">Validación</Link></li>
                                <li><Link to ="/formulario4" className="dropdown-item" href="#">Formulario de Contacto</Link></li>
                              
                            </ul>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>

  )
}

export default Header