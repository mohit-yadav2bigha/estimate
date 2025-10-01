'use client';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };


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
        ref={textRef}
        className="absolute z-10 bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-8 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-80"
        onMouseMove={handleMouseMove}
      >
        <h1
          className="uppercase font-bold tracking-wide text-blue-500 drop-shadow-lg
                     text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          style={{
            fontFamily:
              'SF Compact, system-ui, -apple-system, BlinkMacSystemFont, SF Compact',
            lineHeight: '100%',
            filter: 'blur(19px) brightness(0.2)',
          }}
        >
          ESTIMATE RIGHT BUILD BRIGHT.
        </h1>
        
        {/* Clear text overlay with cursor radius - only letters near cursor */}
        <h1
          className="absolute top-0 left-0 uppercase font-bold tracking-wide text-blue-500 drop-shadow-lg
                     text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          style={{
            fontFamily:
              'SF Compact, system-ui, -apple-system, BlinkMacSystemFont, SF Compact',
            lineHeight: '100%',
            mask: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0px, black 120px, rgba(0,0,0,0.5) 130px, transparent 150px)`,
            WebkitMask: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0px, black 120px, rgba(0,0,0,0.5) 130px, transparent 150px)`,
            filter: 'brightness(1) drop-shadow(0 0 8px rgba(0,0,0,0.3))',
            transition: 'mask 0.1s ease-out, -webkit-mask 0.1s ease-out',
          }}
        >
          ESTIMATE RIGHT BUILD BRIGHT.
        </h1>
        
        {/* Always visible BUILD and BRIGHT - reduced visibility */}
        <h1
          className="absolute top-0 left-0 uppercase font-bold tracking-wide text-blue-500 drop-shadow-lg
                     text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          style={{
            fontFamily:
              'SF Compact, system-ui, -apple-system, BlinkMacSystemFont, SF Compact',
            lineHeight: '100%',
            clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)',
            filter: 'brightness(0.9)',
            opacity: 0.4,
          }}
        >
          ESTIMATE RIGHT BUILD BRIGHT.
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
