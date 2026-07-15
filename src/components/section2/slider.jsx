import React, { useState, useEffect } from "react";
import Slide from "./slide";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden group">

      {/* Images */}
      {images.map((img, index) => (
        <Slide
  key={index}
  {...img}
  active={index === current}
/>
      ))}


      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="
          absolute left-8 top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/30
          text-white text-2xl
          flex items-center justify-center
          shadow-lg
          hover:bg-white hover:text-black
          hover:scale-110
          transition-all duration-300
        "
      >
        ←
      </button>


      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="
          absolute right-8 top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full
          bg-white/20 backdrop-blur-md
          border border-white/30
          text-white text-2xl
          flex items-center justify-center
          shadow-lg
          hover:bg-white hover:text-black
          hover:scale-110
          transition-all duration-300
        "
      >
        →
      </button>


      {/* Dots */}
      <div className="
        absolute bottom-8 left-1/2
        -translate-x-1/2
        flex gap-3
      ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-3 rounded-full transition-all duration-300
              ${
                current === index
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50"
              }
            `}
          />
        ))}
      </div>

    </div>
  );
};

export default Slider;