import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); 
    return () => clearInterval(intervalId); 
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="next-button" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
