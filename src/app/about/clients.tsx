'use client';

export default function Clients() {
  const clientCategories = [
    {
      title: "General Contractors",
      description: "Reliable estimates to help you bid with confidence.",
      url: "/images/c1.png"
    },
    {
      title: "Subcontractors", 
      description: "Detailed material and labor breakdowns tailored to your trade",
      url: "/images/c2.png"
    },
    {
      title: "Developers & Investors",
      description: "Clear cost insights for smarter project decisions.",
      url: "/images/c3.png"
    },
    {
      title: "Architects & Designers",
      description: "Accurate estimates to align designs with budgets",
      url: "/images/c4.png"
    },
    {
      title: "Homeowners & Builders",
      description: "Transparent takeoffs for renovations, custom builds, or residential projects.",
      url: "/images/c5.png"
    }
  ];

  return (
    <div className="relative w-full bg-black overflow-hidden flex items-center justify-center min-h-[300px] py-12 md:py-16 lg:py-[60px]">
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto px-4 gap-8 lg:gap-[80px]">
        
        {/* Left Section - Heading and Description */}
        <div className="flex flex-col w-full lg:w-[464px]">
          {/* Main Heading */}
          <div className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-[76.25px] lg:leading-[84px] lg:tracking-[-1.2px] flex items-center font-[790] whitespace-nowrap">
            Our Clients
          </div>

          {/* Description */}
          <div className="text-white text-sm sm:text-base lg:text-base lg:leading-[100%] font-[350]">
            At Estimating Buddies, we proudly serve a wide range of professionals across the construction industry. Our estimating and takeoff services are designed to support:
          </div>
        </div>

        {/* Right Section - Client Categories */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[813px] lg:h-[136.41510009765625px]">
          {clientCategories.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center flex-1 min-w-[120px] sm:min-w-[140px] lg:flex-1"
            >
              {/* Icon */}
              <div className="mb-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-[62.641510009765625px] lg:h-[62.641510009765625px] flex items-center justify-center">
                <img src={client.url} alt={client.title} className="w-full h-full object-cover" />
              </div>

              {/* Title */}
              <div className="text-white mb-2 text-xs sm:text-sm lg:text-[12px] lg:leading-[1.2] lg:font-[556] text-center">
                {client.title}
              </div>

              {/* Description */}
              <div className="text-white text-xs sm:text-xs lg:text-[10px] lg:leading-[1.3] lg:font-[350] text-center">
                {client.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
