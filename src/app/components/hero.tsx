'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  // Background images array
  const backgroundImages = [
    '/hero.png',
    '/hero.png',
    '/hero.png',
    '/hero.png',
    '/hero.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      {/* Sliding Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Subtle bottom shadow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Main Text */}
      <div
        className="absolute z-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-8 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-80"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <h1
          className="uppercase font-bold tracking-wide text-blue-500 drop-shadow-lg
                     text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          style={{
            fontFamily:
              'SF Compact, system-ui, -apple-system, BlinkMacSystemFont, SF Compact',
            lineHeight: '100%',
          }}
        >
          <span
            className={`transition-opacity duration-300 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ESTIMATE RIGHT
          </span>{' '}
          <span
            className={`transition-all duration-300 ${
              showText ? 'opacity-100 blur-0' : 'opacity-30 blur-s'
            }`}
          >
            BUILD
          </span>{' '}
          <span className="opacity-100">
            BRIGHT.
          </span>
        </h1>
      </div>

      {/* Bottom progress indicator dots */}
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
