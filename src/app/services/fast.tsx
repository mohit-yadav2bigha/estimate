'use client';
import { useState } from 'react';

export default function Fast() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative w-full bg-black overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: '400px', padding: '20px 0' }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div 
          className="text-white mb-3 sm:mb-6 lg:mb-12 text-center flex items-center justify-center w-[90%] max-w-[683px] h-auto min-h-[120px] sm:min-h-[180px] lg:min-h-[252px] font-[790] text-[clamp(1.8rem,7vw,76.25px)] leading-[1.5] sm:leading-[1.2] lg:leading-[84px] tracking-[-0.3px] sm:tracking-[-0.8px] lg:tracking-[-1.2px]"
          style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
        >
          Accurate. Fast.<br />
          Detailed.<br />
          Professional
        </div>

        {/* Subtitle */}
        <div 
          className="text-white mb-4 sm:mb-6 lg:mb-8 text-center w-[90%] max-w-[775px] h-auto font-[656] text-[clamp(0.8rem,3vw,18px)] leading-[1.6] sm:leading-[1.2] lg:leading-[100%] tracking-[0%] uppercase"
          style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
        >
          Accurate, Fast, And Detailed Professional Construction Estimating Services
        </div>

        {/* Know More Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="transition-all duration-300 hover:opacity-80 whitespace-nowrap w-[clamp(100px,22vw,133px)] h-[clamp(36px,7vw,41px)] rounded-lg border-none py-2.5 px-5 sm:py-2.5 sm:px-6 text-white font-medium text-[clamp(0.8rem,2.5vw,14px)]"
          style={{
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
            fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont'
          }}
        >
          Know More
        </button>
      </div>

      {/* Popup Modal - Appears when Know More is clicked */}
      {showDetails && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center p-1 sm:p-4">
          <div className="bg-black rounded-lg w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto border-2 border-white max-w-[90vw] sm:max-w-[1000px]">
            <div className="p-2 sm:p-6 md:p-8">
              <div className="flex justify-between items-center mb-2 sm:mb-6">
                <h2 
                  className="font-bold text-white text-[clamp(0.9rem,3.5vw,2rem)]"
                  style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
                >
                  About Our Services
                </h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-white hover:text-gray-300 font-bold text-[clamp(1.1rem,3.5vw,1.5rem)] min-w-[28px] min-h-[28px]"
                  style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
                >
                  ×
                </button>
              </div>
              
              <div 
                className="text-white leading-[1.8] sm:leading-relaxed space-y-2 sm:space-y-4 text-[clamp(0.8rem,2.5vw,1rem)]"
                style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
              >
                <p>
                  Our <strong>construction remodeling estimating services</strong> bring transparency to the projects, so you know exactly where your money is going. As one of the trusted <strong>construction cost estimating firms</strong>, we combine field experience with the latest digital tools to provide detailed reports that cover labor, materials, and overhead. Our team works like an extension of your own; fast, accurate, and always aligned with your goals. No matter the scale, from small home renovations to large industrial builds, we deliver more than numbers and deliver peace of mind.
                </p>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setShowDetails(false)}
                className="mt-3 sm:mt-6 px-4 sm:px-6 py-2 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 whitespace-nowrap text-[clamp(0.8rem,2.5vw,1rem)] min-w-[80px] min-h-[36px]"
                style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}