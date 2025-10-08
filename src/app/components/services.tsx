'use client';
import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Plumbing Estimating",
      description: "We deliver fast, accurate takeoffs for domestic water, DWV, storm, and gas systems including fixtures, carriers, valves, heaters, pumps, hangers, sleeves, and insulation. You get clear material and labor breakdowns with crew rates, waste factors, and VE options, plus support through RFIs and change orders."
    },
    {
      id: 2,
      title: "Construction Estimating", 
      description: "We specialize in both residential and commercial construction estimating services that give contractors the edge in competitive bids. Our Expert estimator team also supports homeowners and architects with construction remodeling estimating services for renovations. Every estimate is tailored to your project’s needs, ensuring accuracy and transparency from start to finish, no matter the scale."
    },
    {
      id: 3,
      title: "Mechanical Estimating",
      description: "At Estimating Buddies, we convert your HVAC, ductwork, and hydronic piping plans into precise, bid-ready takeoffs. Our CSI-aligned packages detail materials, labor hours, fabrication/installation factors, and value-engineering alternates so you price competitively, protect margin, and avoid change-order surprises."
    },
    {
      id: 4,
      title: "Architectural Cost Estimating",
      description: "Our building estimating service supports architects in designing within budget without compromising creativity. From concept to blueprint, we deliver accurate numbers that align vision with reality. Whether it’s residential or commercial construction estimating services, our estimates ensure designs stay practical, feasible, and ready for execution while meeting financial expectations."
    },
    {
      id: 5,
      title: "Quantity Takeoff",
      description: "Our estimating services include an accurate Quantity Takeoff to calculate materials with precision. From small renovations to multi-story buildings, our team delivers dependable results. With experience in construction remodeling, estimating services, and house construction price analysis, we help contractors and homeowners save time, reduce waste, and make informed purchasing decisions."
    },
    {
      id: 6,
      title: "Electrical Estimating",
      description: "Our team builds disciplined estimates for power distribution, lighting, low-voltage, and fire alarm, covering gear, panels, feeders, conduit, cable tray, devices, and fixtures. We provide detailed quantities, labor units, alternates, and vendor bid-leveling to sharpen your bid day and keep budgets on track."
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