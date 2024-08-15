
import '../../css/listacursos.css';
const Card = ({item}) => {
  return (
    
    <article  className="col-md-4 col-lg-3 mb-3 ">
        <div className="card p-4 h-100 text-center curso-card" data-bs-theme="dark">
            <h4>{item.nombre}</h4>
            <p>{item.descripcion}</p>
        </div>
    </article>
    
  )
}

export default Card