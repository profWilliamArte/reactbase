import  { useEffect, useState } from 'react';

const Cargarimgfondo = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const updateBackground = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        // Mañana
        setBackgroundImage('url(/images/morning.jpg)');
      } else if (currentHour >= 12 && currentHour < 18) {
        // Tarde
        setBackgroundImage('url(/images/afternoon.jpg)');
      } else {
        // Noche
        setBackgroundImage('url(/images/night.jpg)');
      }
    };

    updateBackground();
    const intervalId = setInterval(updateBackground, 60000); // Actualiza cada minuto

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Altura completa de la ventana
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2rem',
  };

  return (
    <div style={backgroundStyle}>
      <h1>¡Hola! Disfruta de tu día.</h1>
    </div>
  );
};

export default Cargarimgfondo;