'use client';
import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Construction Cost\nEstimating",
      description: "We provide precise and detailed cost estimates to help you plan your project effectively. Our estimates reduce risks, avoid surprises, and ensure informed decision-making."
    },
    {
      title: "Residential\nEstimating",
      description: "Reliable estimates for new homes, custom builds, and renovations. We help homeowners and builders stay on budget and plan efficiently."
    },
    {
      title: "Commercial\nEstimating",
      description: "Detailed cost breakdowns for offices, retail spaces, hospitality projects, and large-scale developments. Our insights support competitive bids and better project management."
    },
    {
      title: "Trade-Specific\nEstimates",
      description: "Specialized estimates for subcontractors in electrical, plumbing, HVAC, roofing, and more. We provide clarity and accuracy for every trade involved."
    },
    {
      title: "Consultation &\nSupport",
      description: "Expert guidance to optimize bid strategies, reduce project risks, and increase profitability. We're here to support your success from start to finish."
    },
    {
      title: "Estimating\nConsultant",
      description: "Expert guidance for accurate construction cost estimates, budgeting, and project planning. We provide clear, actionable insights so you can bid confidently and manage expenses efficiently."
    },
    {
      title: "General\nContractors\nSupport",
      description: "Detailed cost breakdowns, material lists, and labor estimates specifically for general contractors, ensuring your projects stay on track, on budget, and on time."
    },
    {
      title: "Quantity\nTakeoff",
      description: "Precise measurement and calculation of materials for all types of construction projects. Our quantity takeoffs reduce errors, streamline procurement, and improve project planning for contractors and designers alike."
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black px-4 py-8 md:py-16 overflow-hidden">
      {/* Background Blur Circle */}
      <div 
        className="absolute hidden md:block"
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
        <div className="mb-8 md:mb-16">
          <h1 
            className="text-white mb-4 md:mb-6"
            style={{
              fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
              fontWeight: '790',
              fontSize: 'clamp(32px, 8vw, 64px)',
              lineHeight: 'clamp(36px, 9vw, 68px)',
              letterSpacing: '-1.2px'
            }}
          >
            Our Services
          </h1>
          <p 
            className="text-white/60 mb-8 md:mb-12 text-sm md:text-lg"
            style={{
              fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
              fontWeight: '350',
              lineHeight: '1.3',
              letterSpacing: '0%'
            }}
          >
            At Estimating Buddies, we provide a full range of construction estimating solutions tailored to meet the needs of contractors, developers, architects, and homeowners. Our services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative px-4 md:px-8 lg:px-20">
          {/* Grid Container */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group cursor-pointer h-[240px] md:h-[240px] lg:h-[280px] w-full mb-6 lg:mb-0"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div 
                className={`relative w-full h-full p-4 md:p-4 lg:p-6 transition-all duration-300 rounded-lg ${
                  hoveredCard === index 
                    ? 'border border-white/30' 
                    : 'border border-transparent'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Corner Square Boxes - Only appear on hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none rounded-lg">
                    {/* Top Left Corner Square */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/80"></div>
                    
                    {/* Top Right Corner Square */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/80"></div>
                    
                    {/* Bottom Left Corner Square */}
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/80"></div>
                    
                    {/* Bottom Right Corner Square */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/80"></div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between text-center md:text-left">
                  <div>
                    <h3 
                      className="text-white mb-3 md:mb-4 lg:mb-6 whitespace-pre-line"
                      style={{
                        fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                        fontWeight: '350',
                        fontSize: 'clamp(14px, 3.5vw, 30px)',
                        lineHeight: '1.2',
                        letterSpacing: '0%',
                        opacity: '1'
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="flex-1 flex items-start justify-center md:justify-start">
                    <p 
                      className="text-white/70 text-xs md:text-sm lg:text-sm leading-relaxed"
                      style={{
                        fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                        fontWeight: '350',
                        lineHeight: '1.4',
                        letterSpacing: '0%'
                      }}
                    >
                      {service.description}
                    </p>
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
