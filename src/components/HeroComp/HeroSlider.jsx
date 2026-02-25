import React, { useState, useEffect, useRef, useCallback } from "react";
import { IMAGES, AUTO_PLAY_DURATION } from "./constants";
import BackgroundSlides from "./BackgroundSlides";
import NavigationButtons from "./NavigationButtons";
import ContentOverlay from "./ContentOverlay";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // Next slide
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

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, handleNext]);

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
    setIsPaused(true);
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
      className="relative w-full h-screen overflow-hidden bg-zinc-950 font-sans select-none group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slides */}
      <BackgroundSlides currentIndex={currentIndex} isPaused={isPaused} />

      {/* Navigation buttons */}
      <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />

      {/* Overlay content */}
      <ContentOverlay
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isPaused={isPaused}
      />
    </div>
  );
};

export default HeroSlider;
