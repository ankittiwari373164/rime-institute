import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationButtons = ({ handlePrev, handleNext }) => (
  <>
    <button
      onClick={handlePrev}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-md hidden md:flex items-center justify-center border border-white/10"
    >
      <ChevronLeft size={28} />
    </button>
    <button
      onClick={handleNext}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-md hidden md:flex items-center justify-center border border-white/10"
    >
      <ChevronRight size={28} />
    </button>
  </>
);

export default NavigationButtons;
