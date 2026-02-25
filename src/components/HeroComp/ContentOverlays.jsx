import React from "react";
import { STATS, IMAGES, AUTO_PLAY_DURATION } from "./constants";
import { Pause, Play } from "lucide-react";

const ContentOverlay = ({ currentIndex, setCurrentIndex, isPaused }) => (
  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white px-6">
    {/* Headings */}
    <div className="overflow-hidden mb-2">
      <h2 className="text-base md:text-xl font-medium text-yellow-400 tracking-[0.4em] uppercase animate-slide-up">
        Excellence in Education
      </h2>
    </div>

    <div className="text-center mb-10 md:mb-16">
      <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.25em] mb-4 drop-shadow-lg animate-fade-in-up">
        THE FUTURE
      </h2>
      <h1
        className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter leading-none drop-shadow-2xl animate-scale-in"
        style={{ animationDelay: "0.2s" }}
      >
        STARTS HERE
      </h1>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full animate-width-grow" />
    </div>

    {/* Stats */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-4xl">
      {STATS.map((stat, idx) => (
        <React.Fragment key={idx}>
          <div
            className="flex items-center gap-4 md:gap-6 group/stat animate-fade-in"
            style={{ animationDelay: `${0.4 + idx * 0.2}s` }}
          >
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
          {idx === 0 && <div className="hidden md:block h-16 w-px bg-white/20" />}
        </React.Fragment>
      ))}
    </div>

    {/* Progress Indicators */}
    <div className="absolute bottom-12 flex items-center gap-4">
      {IMAGES.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className="relative h-1 w-12 md:w-16 bg-white/20 rounded-full overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-yellow-400 transition-all duration-300 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: idx === currentIndex ? "100%" : "0%",
              animation:
                idx === currentIndex && !isPaused
                  ? `progress-bar ${AUTO_PLAY_DURATION}ms linear forwards`
                  : "none",
            }}
          />
        </button>
      ))}
      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {isPaused ? (
          <Pause size={16} className="text-white/50" />
        ) : (
          <Play size={16} className="text-white/50" />
        )}
      </div>
    </div>
  </div>
);

export default ContentOverlay;
