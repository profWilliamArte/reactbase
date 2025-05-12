import { useState } from "react";


const Cargarimg = () => {
    const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => prevImages.concat(imageUrls));
  };

  const handleRemoveImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };
  return (
    <div className="container">
        <div className="container mt-5">
        <h2>Cargador de Imágenes</h2>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} className="form-control mb-3"/>
        <div className="row">
            {images.map((image, index) => (
            <div className="col-md-4 mb-3" key={index}>
                <div className="card" data-bs-theme="dark">
                <img src={image} alt={`Uploaded ${index}`} className="card-img-top" />
                <div className="card-body">
                    <button className="btn btn-danger" onClick={() => handleRemoveImage(index)}>Eliminar</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Cargarimg