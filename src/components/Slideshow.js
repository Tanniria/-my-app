import React, { useState, useEffect } from 'react';
 
const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
 
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
 
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
 
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000);
 
        return () => clearInterval(intervalId);
    }, [images.length]);
 
    return (
        <div className="slideshow-container">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="slideshow-image"
            />
            {/* <div className="slideshow-buttons">
                <button onClick={goToPreviousSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </div> */}
        </div>
    );
};
 
export default Slideshow;