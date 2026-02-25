// src/components/Hero/BackgroundSlides.jsx
import React from "react";
import { IMAGES } from "./constants";

const BackgroundSlides = ({ currentIndex, isPaused }) => {
  return (
    <>
      {IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 transition-transform duration-7000ms ease-linear ${
              index === currentIndex && !isPaused ? "scale-110" : "scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%), url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      ))}
    </>
  );
};

export default BackgroundSlides;
