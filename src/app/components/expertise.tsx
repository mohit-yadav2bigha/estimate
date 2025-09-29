'use client';
import { useState } from 'react';

export default function Expertise() {
  // Array of 5 construction/architecture images
  const images = [
    "/E2.jpg",
    "/E1.jpg",
    "/E2.jpg",
    "/E1.jpg",
    "/E2.jpg"
  ];

  return (
    <div className="relative w-full px-4 py-1 overflow-hidden min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#131313]">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:w-[1000px] lg:h-[230px] lg:gap-5 lg:mx-auto lg:mt-5 mt-5">
          
          {/* Left Side Content - Main Heading */}
          <div className="lg:w-[500px] lg:h-[300px] w-full mb-6 lg:mb-0">
            <h1 className="text-white font-[590] text-2xl lg:text-[40px] leading-8 lg:leading-[54px] tracking-[-0.8px] lg:tracking-[-1.2px] mb-0">
              <span className="text-[#C8C2BD]">Accuracy, trust, and expertise  — </span> 
              <span className="font-[350]">
                everything your project needs to succeed.
              </span>
            </h1>
          </div>

          {/* Right Side Content - Two Column Text */}
          <div className="flex flex-col lg:flex-row lg:gap-8 lg:w-[520px] lg:h-[400px] w-full">
            {/* First Column */}
            <div className="lg:w-[280px] w-full mb-4 lg:mb-0">
              <p className="text-white/90 font-[250] text-sm leading-[100%] tracking-[-0.2px] mb-6">
                At Estimating Buddies, we understand that every project starts with a dream you can trust. From residential construction estimating on single-family homes to intricate multifamily housing, we ensure your budgets are realistic, dependable, and profitable.<br /> Each project is managed by a certified professional estimator who balances technical knowledge with industry guidelines. We don't merely crunch numbers—we see the individual challenges of contractors, architects, and developers. This people-first strategy means our clients get more than raw data; they gain insights that inform smarter decisions.
              </p>
            </div>
            
            {/* Second Column */}
            <div className="lg:w-[240px] w-full">
              <p className="text-white/90 font-[250] text-sm leading-[100%] tracking-[-0.2px]">
                As experts in construction estimating consultants, we are your committed partner in each step of planning and budding. From reviews of blueprints to precision takeoffs, our model is built to save you time, mitigate risk, and enhance your success rate.<br /> Selecting Estimating Buddies means selecting precision, quality, and dedication. With us, you can bid intelligently, construct with certainty, and expand your business without questioning the numbers.
              </p>
            </div>
          </div>

        </div>

        {/* Image Carousel Section with Marquee Effect */}
        <div className="w-full h-[400px] lg:h-[600px] relative mt-8 lg:mt-12 ml-0 lg:ml-[200px] overflow-hidden">
          {/* Marquee Container */}
          <div 
            className="flex gap-4 lg:gap-6 animate-marquee"
            style={{
              width: 'calc(280px * 10 + 16px * 9)', // Mobile width
              height: '360px', // Mobile height
              paddingTop: '20px'
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...images, ...images].map((imageSrc, index) => {
              const texts = [
                "Click to launch the Camera app. Click again to instantly take a photo.",
                "In video mode, click to start recording.",
                "A light press opens recent apps.",
                "Double-click to return to home screen.",
                "Press and hold for voice commands."
              ];
              
              return (
                <div 
                  key={index}
                  className="w-[280px] lg:w-[420px] h-[340px] lg:h-[520px] flex-shrink-0"
                >
                  <div 
                    className="w-full h-[280px] lg:h-[420px] rounded-lg bg-black mb-4 relative overflow-hidden"
                  >
                    <img 
                      src={imageSrc}
                      alt={`Construction image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#C8C2BD] font-[250] text-xs lg:text-[13px] leading-[18px] tracking-[-0.1px] m-0 pl-2">
                    {texts[index % texts.length]}
                  </p>
                </div>
              );
            })}
          </div>

           {/* Navigation Arrows - Fixed to Page */}
           <div className="absolute bottom-5 right-8 lg:right-12 flex gap-3 z-10">
            {/* Left Arrow */}
            <div className="w-9 h-9 rounded-full bg-[#424245B8] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#424245FF]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Right Arrow */}
            <div className="w-9 h-9 rounded-full bg-[#424245B8] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#424245FF]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-296px * 5 - 16px * 4));
          }
        }
        
        @media (min-width: 1024px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-520px * 5 - 24px * 4));
            }
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}