'use client';
import React from 'react';
import Image from 'next/image';

export default function Software() {
  const softwareTools = [
    {
      id: 1,
      name: "Plan swift",
      logoUrl: "/images/planswift.png"
    },
    {
      id: 2,
      name: "Bluebeam",
      logoUrl: "/images/bluebeam.png"
    },
    {
      id: 3,
      name: "Xactimate",
      logoUrl: "/images/xactimate.png"
    },
    {
      id: 4,
      name: "Trimble",
      logoUrl: "/images/trimble.png"
    },
    {
      id: 5,
      name: "Accubid",
      logoUrl: "/images/accubid.png"
    },
    {
      id: 6,
      name: "On-Screen Take-offs",
      logoUrl: "/images/takeoff.png"
    },
    {
      id: 7,
      name: "RS Means",
      logoUrl: "/images/rsmeans.png"
    }
  ];

  return (
    <div className="relative w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden min-h-[80px]">
      
      {/* Background Blur Circle */}
      <div 
        className="absolute hidden lg:block"
        style={{
          width: '778px',
          height: '778px',
          top: '200px',
          right: '100px',
          opacity: '0.19',
          background: '#23AAE2',
          borderRadius: '50%',
          backdropFilter: 'blur(459px)',
          mixBlendMode: 'exclusion',
          filter: 'blur(200px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-20 text-center">
          <h1 className="text-white mx-auto font-sf-compact font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-tight md:leading-tight lg:leading-[64px] lg:tracking-[-1.2px] text-center flex items-center justify-center max-w-full px-4 sm:px-6 lg:px-0 lg:w-[1002px] lg:h-[128px]">
            What software do we use for home building cost estimating services?
          </h1>
        </div>

        {/* Software Tools Grid */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 lg:gap-12 xl:gap-[50px] opacity-50 max-w-full px-2 sm:px-4">
            {softwareTools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:opacity-100 w-20 sm:w-24 md:w-28 lg:w-[129px] gap-2 sm:gap-3"
              >
                {/* Logo Container */}
                <div className="flex items-center justify-center transition-all duration-300 p-2 sm:p-3 lg:p-4 w-full h-16 sm:h-20 lg:h-[92px] relative">
                  <Image
                    src={tool.logoUrl}
                    alt={tool.name}
                    width={80}
                    height={60}
                    className="max-w-[60px] max-h-[45px] sm:max-w-[70px] sm:max-h-[50px] lg:max-w-[80px] lg:max-h-[60px] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert filter-none"
                  />
                </div>
                
                {/* Tool Name */}
                <div className="w-full h-4 sm:h-5 lg:h-[21px]">
                  <p className="text-white/70 group-hover:text-white transition-all duration-300 font-sf-compact font-light text-xs sm:text-sm lg:text-base leading-[133%] tracking-normal text-center m-0">
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}