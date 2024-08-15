import { useState } from "react";

const Listasimg = () => {
    const [imagen, setImagen] = useState(null);
    const [desc, setDesc] = useState(null);

    const imagenes = [
        {
            descripcion: 'The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.',
            url: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png',       
        },
        {
            descripcion: 'The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.',
            url: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png',
        },
        {
            descripcion: 'The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.',
            url: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png',
        },
        {
            descripcion: 'The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.',
            url: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png'
        }
    ];

    const handleSelectImagen = (e) => {
        const selectedIndex = e.target.value;
        setImagen(imagenes[selectedIndex].url);
        setDesc(imagenes[selectedIndex].descripcion);
    };

    return (
        <>
            <h3 className="text-center py-4">Lista de Imágenes</h3>
            <div className="col-md-4 mx-auto text-center">
                <select onChange={handleSelectImagen} className="form-select" aria-label="Selecciona una imagen" defaultValue="">
                    <option value="" disabled>Selecciona un producto</option>
                    <option value="0">Apple AirPods Max Silver</option>
                    <option value="1">Apple iPhone Charger</option>
                    <option value="2">Apple MagSafe Battery Pack</option>
                    <option value="3">Beats Flex Wireless Earphones</option>
                </select>
            </div>
            <div className="col-md-6 mx-auto text-center">
                {imagen && (
                    <img src={imagen} alt="Imagen seleccionada" className="img-fluid img-thumbnail mt-5 " />
                )}
                {desc && (
                    <p className="mt-3 border rounded-2 p-2">{desc}</p>
                )}
            </div>
        </>
    );
};

export default Listasimg;

