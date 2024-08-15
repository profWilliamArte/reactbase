
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    '/fondo/carro01.jpg',
    '/fondo/carro02.jpg',
    '/fondo/carro03.jpg',
    '/fondo/carro01.jpg',
    '/fondo/carro02.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Cambia este valor para mostrar más o menos imágenes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="container-fluid p-0">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <img 
            src={image} 
            alt={`Imagen ${index}`} 
            style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }} 
          />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default ImageSlider;

{/* 
  
  <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
  */}

