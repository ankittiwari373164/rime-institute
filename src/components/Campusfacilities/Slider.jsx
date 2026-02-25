import { useState, useEffect, useCallback, useRef } from 'react';
import { CAMPUS_DATA } from '../data';
import ProgressBar from './ProgressBar';
import Slide from './Slide';
import Controls from './Controls';
import Indicators from './Indicators';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();
  const SLIDE_DURATION = 4000;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === CAMPUS_DATA.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? CAMPUS_DATA.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const step = 100;
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
      clearInterval(progressRef.current);
    }
    return () => clearInterval(progressRef.current);
  }, [isAutoPlaying, handleNext]);

  return (
    <div className="relative aspect-video md:aspect-21/9 overflow-hidden rounded-sm bg-neutral-100 shadow-xl group/slider">
      <ProgressBar progress={progress} />
      <div 
        className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {CAMPUS_DATA.map((item, index) => (
          <Slide key={index} item={item} />
        ))}
      </div>
      <Controls 
        handlePrev={handlePrev} 
        handleNext={handleNext} 
        isAutoPlaying={isAutoPlaying} 
        togglePlay={() => setIsAutoPlaying(!isAutoPlaying)} 
      />
      <Indicators 
        data={CAMPUS_DATA} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
        setProgress={setProgress} 
      />
    </div>
  );
}
