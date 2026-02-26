// src/components/Admissions/RightSection.jsx
import React from "react";

const RightSection = ({ goldenColor, currentDepartment, isTransitioning }) => {
  return (
    <div 
      style={{ backgroundColor: goldenColor }}
      className="flex-1 flex items-center justify-center p-8 relative overflow-hidden"
    >
      <div className="w-full max-w-2xl">
        <div 
          className={`transition-all duration-700 transform ${
            isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-wide drop-shadow-md">
            {currentDepartment}
          </h2>
          <div className="mt-6 w-32 h-1 bg-white opacity-80"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
      <div className="absolute bottom-10 left-10 w-2 h-20 bg-white/20"></div>
    </div>
  );
};

export default RightSection;
