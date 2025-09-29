'use client';
import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Cost Estimating",
      description: "Our Cost Estimating services ensure correct project budgets, in-depth breakdowns, and accurate cost projections. From initial planning stages to the final changes, we keep your project financially on track. With industry experience in a variety of sectors, we assist you in staying ahead of surprises and making smart, profitable decisions."
    },
    {
      id: 2,
      title: "Construction Estimating", 
      description: "Comprehensive cost analysis for construction projects ensuring accurate budget planning, material cost estimation, and resource allocation. We provide detailed breakdowns for all construction phases from foundation to finishing."
    },
    {
      id: 3,
      title: "General Contractors",
      description: "Supporting general contractors with precise bidding assistance, comprehensive project cost analysis, and detailed resource planning to help secure more projects while maintaining healthy profit margins."
    },
    {
      id: 4,
      title: "Architectural Cost Estimating",
      description: "Specialized estimating services for architectural projects, helping architects make informed design decisions with accurate cost projections that align with client budgets and project requirements."
    },
    {
      id: 5,
      title: "Quantity Takeoff",
      description: "Precise material quantity calculations using advanced software and industry expertise. We provide detailed takeoffs for accurate material procurement and cost estimation across all project phases."
    },
    {
      id: 6,
      title: "Outsource Estimating Services",
      description: "Reliable outsourcing solutions for your estimating needs. Our experienced team provides consistent, high-quality estimates, allowing you to focus on core business operations while ensuring accuracy."
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black px-4 lg:px-8 py-8 lg:py-16 overflow-hidden">
      
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

      {/* Mobile Background Blur Circle */}
      <div 
        className="absolute block lg:hidden"
        style={{
          width: '300px',
          height: '300px',
          top: '100px',
          right: '-50px',
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
        <div className="mb-8 lg:mb-16">
          <h1 
            className="text-white mb-4 lg:mb-6 text-3xl lg:text-7xl"
            style={{
              fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
              fontWeight: '790',
              lineHeight: '1.1',
              letterSpacing: '-1.2px'
            }}
          >
            Our Services
          </h1>
          <p 
            className="text-white/60 mb-6 lg:mb-12 text-sm lg:text-lg"
            style={{
              fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
              fontWeight: '350',
              lineHeight: '1.4',
              letterSpacing: '0%'
            }}
          >
            Comprehensive estimating solutions tailored for every client, every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative px-4 lg:px-20">
          {/* Grid Container */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group cursor-pointer w-full"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card */}
                <div 
                  className={`relative w-full h-full min-h-[280px] lg:min-h-[320px] p-4 lg:p-6 transition-all duration-300 rounded-lg flex flex-col ${
                    hoveredCard === service.id 
                      ? 'border border-white/30' 
                      : 'border border-transparent'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Corner Square Boxes - Only appear on hover */}
                  {hoveredCard === service.id && (
                    <div className="absolute inset-0 pointer-events-none rounded-lg">
                      {/* Top Left Corner Square */}
                      <div className="absolute top-0 left-0 w-2 h-2 lg:w-3 lg:h-3 border-l-2 border-t-2 border-white/80"></div>
                      
                      {/* Top Right Corner Square */}
                      <div className="absolute top-0 right-0 w-2 h-2 lg:w-3 lg:h-3 border-r-2 border-t-2 border-white/80"></div>
                      
                      {/* Bottom Left Corner Square */}
                      <div className="absolute bottom-0 left-0 w-2 h-2 lg:w-3 lg:h-3 border-l-2 border-b-2 border-white/80"></div>
                      
                      {/* Bottom Right Corner Square */}
                      <div className="absolute bottom-0 right-0 w-2 h-2 lg:w-3 lg:h-3 border-r-2 border-b-2 border-white/80"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 
                      className="text-white mb-3 lg:mb-4 text-sm lg:text-xl font-semibold leading-tight"
                      style={{
                        fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        letterSpacing: '-0.5px'
                      }}
                    >
                      {service.title}
                    </h3>
                    
                    <p 
                      className="text-white/70 flex-grow mb-4 lg:mb-6 text-xs lg:text-sm leading-relaxed"
                      style={{
                        fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                        fontWeight: '350',
                        lineHeight: '1.4',
                        letterSpacing: '0%'
                      }}
                    >
                      {service.description}
                    </p>
                    
                    {/* Know More Button - Always at bottom */}
                    <div className="mt-auto flex justify-center">
                      <button
                        className="text-white/90 text-xs lg:text-sm transition-all duration-300 hover:bg-white/10 hover:text-white"
                        style={{
                          width: '100px',
                          height: '32px',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                          fontWeight: '400',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}