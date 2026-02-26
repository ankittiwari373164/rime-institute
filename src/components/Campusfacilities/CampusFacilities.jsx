import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CAMPUS_DATA = [
  {
    title: "Library",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Sports",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Labs",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Canteen",
    image: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?auto=format&fit=crop&q=80&w=2000",
  },
  {
    title: "Hostel",
    image: "/hostel-image.jpeg",
  }
];

export default function CampusFacilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();
  const SLIDE_DURATION = 4000; // 4 seconds per slide

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === CAMPUS_DATA.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CAMPUS_DATA.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  // Main Auto-scroll Logic with Progress Bar
  useEffect(() => {
    if (isAutoPlaying) {
      const step = 100; // update every 100ms
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + (100 / (SLIDE_DURATION / step));
        });
      }, step);
    } else {
      if (progressRef.current) clearInterval(progressRef.current);
    }
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isAutoPlaying, handleNext]);

  return (
    <div className="h-auto bg-white font-sans text-neutral-800 overflow-x-hidden">
      {/* Header - Updated with @RIME */}
      <header className="py-8 text-center border-b border-neutral-100 bg-white">
        <h1 className="text-4xl font-bold tracking-tight">
          Campus <span className="text-neutral-500 font-light">@RIME</span>
        </h1>
        <div className="mt-4 w-16 h-0.5 bg-neutral-200 mx-auto"></div>
      </header>

      {/* Main Slider Section */}
      <main className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="relative aspect-video md:aspect-21/9 overflow-hidden rounded-sm bg-neutral-100 shadow-xl group/slider">

          {/* Progress Bar Overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-1">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slides Container */}
          <div
            className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CAMPUS_DATA.map((item, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-75 scale-100 group-hover/slider:scale-105 transition-transform duration-5000"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white z-1">
                  <h2 className="text-5xl md:text-7xl font-light tracking-widest uppercase">
                    {item.title}
                  </h2>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); setIsAutoPlaying(false); }}
              className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all z-1"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); setIsAutoPlaying(false); }}
              className="w-12 h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all z-1"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pause/Play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute bottom-6 left-10 md:left-auto md:right-55 text-white/70 hover:text-white transition-colors z-1"
          >
            {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 right-10 flex items-center gap-3 z-1">
            {CAMPUS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setProgress(0); setIsAutoPlaying(false); }}
                className={`h-1 transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}