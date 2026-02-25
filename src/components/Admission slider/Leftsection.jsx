// src/components/Admissions/LeftSection.jsx
import React from "react";

const LeftSection = ({ goldenColor }) => {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center p-8 bg-[#fdfbf7]">
      {/* Subtle Watermark Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={goldenColor} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke={goldenColor} strokeWidth="1" strokeDasharray="5,5" />
          <line x1="20%" y1="20%" x2="80%" y2="80%" stroke={goldenColor} strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-1 text-center">
        <h1 
          style={{ color: goldenColor }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2"
        >
          ADMISSIONS OPEN
        </h1>
        <p 
          style={{ color: goldenColor }}
          className="opacity-90 text-2xl md:text-4xl font-light mb-6"
        >
          2026 - 27 Session
        </p>
        <div 
          style={{ backgroundColor: goldenColor }}
          className="w-48 h-1.5 mx-auto rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default LeftSection;
