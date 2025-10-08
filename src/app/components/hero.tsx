'use client';
import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  // Background images array with their specific transition effects
  const backgroundImages = [
    { src: '/b.jpg', effect: 'fade-scale' },
    { src: '/home.jpg', effect: 'slide-left' },
    { src: '/y.jpg', effect: 'slide-right' },
    { src: '/u.jpg', effect: 'zoom-rotate' },
    { src: '/c.png', effect: 'flip-horizontal' },
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

  const getTransitionClasses = (index: number) => {
    const isActive = index === currentImageIndex;
    const effect = backgroundImages[index].effect;
    
    switch (effect) {
      case 'fade-scale':
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`;
      
      case 'slide-left':
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`;
      
      case 'slide-right':
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`;
      
      case 'zoom-rotate':
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-125 rotate-12'
        }`;
      
      case 'flip-horizontal':
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`;
      
      default:
        return `transition-all duration-1000 ease-in-out transform ${
          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`;
    }
  };


  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden">
      {/* Sliding Background Images */}
      {backgroundImages.map((imageData, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${getTransitionClasses(index)}`}
          style={{ 
            backgroundImage: `url('${imageData.src}')`,
            filter: index === currentImageIndex ? 'brightness(1)' : 'brightness(0.8)'
          }}
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
                     text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                     transition-transform duration-300 ease-in-out
                     hover:scale-110 cursor-pointer"
          style={{
            fontFamily:
              'SF Compact, system-ui, -apple-system, BlinkMacSystemFont, SF Compact',
            lineHeight: '100%',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
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
