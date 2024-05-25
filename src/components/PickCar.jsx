import React, { useState, useEffect } from "react";
import { CAR_DATA } from "./CarData.js";
import "./CarSlider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

function PickCar() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? CAR_DATA.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === CAR_DATA.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="car-slider">
              {CAR_DATA[currentSlide].map((car) => (
                <div key={car.name} className="car-slide">
                  <img src={car.img} alt={car.name} />
                  <h3>{car.name}</h3>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button onClick={handlePrevSlide}>Prev</button>
              <button onClick={handleNextSlide}>Next</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;