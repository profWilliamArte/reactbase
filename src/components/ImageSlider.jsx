import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    'src/assets/fondo/carro01.jpg',
    'src/assets/fondo/carro02.jpg',
    'src/assets/fondo/carro03.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="container-fluid p-0">  
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ padding: '0 5px' }}> {/* Ajusta el padding aquí */}
              <img 
                src={image} 
                alt={`Imagen ${index}`} 
                style={{ 
                  width: '100%', // Cambia a '100%' para que ocupe todo el espacio disponible
                  borderRadius: '8px', // Puedes agregar un borde redondeado si lo deseas
                  padding: '0 5px', // Ajusta el padding aquí
                }} 
              />
            </div>
          ))}
        </Slider>
      </div>  
    </div>
  );
};

export default ImageSlider;