import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to move to the previous image
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Auto play the carousel
  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={goToPrevious}>&lt;</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="next-button" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
