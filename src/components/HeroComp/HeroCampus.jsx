import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, MapPin, Pause, Play } from 'lucide-react';

const IMAGES = [
  '/slider-1.jpeg',
  '/slider-2.jpeg',
  '/slider-3.jpeg',
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=2000',
  '/campus-image-rime-2.jpeg',
  '/slider-4.jpeg',
  '/slider-5.jpeg',
  '/slider-6.jpeg'
];

const STATS = [
  { value: '17.5', label: 'Acres', subLabel: 'Campus Size', icon: <MapPin className="text-yellow-400" size={24} /> },
  { value: '20+', label: 'No. of', subLabel: 'Programmes', icon: <GraduationCap className="text-yellow-400" size={24} /> }
];

const AUTO_PLAY_DURATION = 6000; // 6 seconds per slide

export default function HeroCampus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning]);

  // Auto-slide logic with pause capability
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, handleNext]);

  // Swipe Handlers
  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
    setIsPaused(true); // Pause while touching
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
  };

  return (
    <div 
      className="relative w-full lg:h-screen h-200 mt-30 overflow-hidden bg-zinc-950 font-sans select-none group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Layer */}
      {IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className={`absolute inset-0 transition-transform duration-7000 ease-linear ${
              index === currentIndex && !isPaused ? 'scale-110' : 'scale-105'
            }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%), url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      ))}

      {/* Navigation UI */}
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

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6">
        <div className="overflow-hidden mb-2">
            <h2 className="text-base md:text-xl font-medium text-yellow-400 tracking-[0.4em] uppercase animate-slide-up">
                Excellence in Education
            </h2>
        </div>

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.25em] mb-4 drop-shadow-lg animate-fade-in-up">
            THE FUTURE
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-none drop-shadow-2xl animate-scale-in" style={{ animationDelay: '0.2s' }}>
            STARTS HERE
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full animate-width-grow" />
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-4xl">
          {STATS.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-4 md:gap-6 group/stat animate-fade-in" style={{ animationDelay: `${0.4 + (idx * 0.2)}s` }}>
                <div className="text-5xl md:text-8xl font-bold text-white group-hover/stat:text-yellow-400 transition-colors duration-500 tabular-nums">
                  {stat.value}
                </div>
                <div className="flex flex-col border-l-2 border-yellow-400/30 pl-4 py-1">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <span className="text-lg md:text-2xl font-bold uppercase tracking-wider text-white">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-sm md:text-lg font-light text-zinc-300 tracking-wide">
                    {stat.subLabel}
                  </span>
                </div>
              </div>
              {idx === 0 && (
                <div className="hidden md:block h-16 w-px bg-white/20" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Status Indicators & Progress Bar */}
        <div className="absolute bottom-12 flex items-center gap-4">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="relative h-1 w-12 md:w-16 bg-white/20 rounded-full overflow-hidden"
            >
              {/* Foreground progress bar */}
              <div 
                className={`absolute inset-0 bg-yellow-400 transition-all duration-300 ${
                  idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  width: idx === currentIndex ? '100%' : '0%',
                  animation: idx === currentIndex && !isPaused 
                    ? `progress-bar ${AUTO_PLAY_DURATION}ms linear forwards`
                    : 'none'
                }}
              />
            </button>
          ))}
          
          {/* Visual Play/Pause indicator for context */}
          <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {isPaused ? <Pause size={16} className="text-white/50" /> : <Play size={16} className="text-white/50" />}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-bar {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.85); filter: blur(10px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes width-grow {
          from { width: 0; }
          to { width: 6rem; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-scale-in { animation: scale-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-width-grow { animation: width-grow 1s ease-out 0.8s forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}