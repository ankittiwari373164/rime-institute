// src/pages/Admissions.jsx
import React, { useState, useEffect } from "react";
import { departments } from "../components/Admissions/Departments";
import LeftSection from "../components/Admissions/LeftSection";
import RightSection from "../components/Admissions/RightSection";

const Admissions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goldenColor = "#b5892e";

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % departments.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden bg-white select-none">
      <LeftSection goldenColor={goldenColor} />
      <RightSection 
        goldenColor={goldenColor} 
        currentDepartment={departments[currentIndex]} 
        isTransitioning={isTransitioning} 
      />
    </div>
  );
};

export default Admissions;
