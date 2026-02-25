import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function Controls({ handlePrev, handleNext, isAutoPlaying, togglePlay }) {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all z-30"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all z-30"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <button 
        onClick={togglePlay}
        className="absolute bottom-6 left-10 md:left-auto md:right-55 text-white/70 hover:text-white transition-colors z-30"
      >
        {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </>
  );
}
