'use client';
import { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoPaperPlane } from 'react-icons/io5'; 

export default function Clarity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const placeholders = ['Ask a Question', 'Type a Question'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10" />
      
      {/* Background Element - Responsive positioning */}
      <div 
        className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[978px] lg:h-[978px] 
                   top-4 sm:top-8 md:top-12 lg:top-[76px] 
                   left-[-100px] sm:left-[-150px] md:left-[-200px] lg:left-[-282px]
                   bg-[#23AAE2] opacity-19 mix-blend-exclusion blur-[100px] sm:blur-[200px] md:blur-[300px] lg:blur-[459px]"
      />
      
      {/* First Section - Clarity Behind Every Estimate */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Heading */}
        <h1 className="text-white mb-4 sm:mb-6 max-w-4xl font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                      font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                      leading-tight tracking-tight text-center">
          <span className="block sm:inline">Clarity Behind</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">Every Estimate</span>
        </h1>

        {/* Subtitle */}
        <div className="text-white mb-8 sm:mb-10 md:mb-12 max-w-5xl 
                       font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                       font-semibold text-sm sm:text-base md:text-lg lg:text-xl 
                       leading-tight tracking-wide text-center uppercase">
          WE SIMPLIFY CONSTRUCTION COSTS WITH ACCURATE, TRANSPARENT, AND TIMELY REPORTS.
        </div>

        {/* Content Text */}
        <div className="text-white mb-8 sm:mb-10 md:mb-12 max-w-3xl 
                       font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                       font-light text-sm sm:text-base leading-relaxed tracking-wide text-center">
          <p className="mb-3 sm:mb-4">
            At Estimating Buddies, we specialize in delivering accurate, transparent, and cost-effective construction estimating and material takeoff services for contractors, developers, architects, and homeowners. Our goal is simple, help you save time, reduce risks, and maximize profitability through reliable estimates you can trust.
          </p>
          <p className="mb-3 sm:mb-4">
            We know every project is different, which is why we approach each with attention to detail and a deep understanding of industry requirements. By using advanced software and proven methodologies, we ensure precision and efficiency in every estimate we provide.
          </p>
          <p className="mb-3 sm:mb-4">
            What sets us apart is our commitment to quality, quick turnaround, and client-focused service. Whether it&apos;s a residential build, a commercial development, or a complex renovation, Estimating Buddies gives you the clarity and confidence needed to make informed project decisions.
          </p>
          <p>
            When you choose us, you gain more than just an estimating service, you gain a trusted partner dedicated to supporting your success at every stage of construction.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 sm:mb-8 max-w-sm sm:max-w-md md:max-w-lg w-full 
                       h-12 sm:h-14 md:h-[54px] 
                       rounded-2xl sm:rounded-[17px] 
                       border-2 border-transparent 
                       bg-gradient-to-r from-black to-black bg-clip-padding 
                       before:absolute before:inset-0 before:rounded-2xl sm:before:rounded-[17px] 
                       before:bg-gradient-to-r before:from-[#095296] before:to-[#2997FF] 
                       before:z-[-1] before:p-[2px] before:bg-clip-border
                       shadow-[0px_0px_30px_5px_rgba(41,151,255,0.2)] sm:shadow-[0px_0px_40px_7px_rgba(41,151,255,0.3)] md:shadow-[0px_0px_57px_9px_rgba(41,151,255,0.36)]">
          <div className="flex items-center justify-between h-full px-4 sm:px-5 md:px-6">
            {/* Search Icon with small stars */}
            <div className="relative">
              <IoSearch className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              {/* Small stars above search icon */}
              <div className="absolute -top-1 sm:-top-2 -left-1">
                <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full opacity-60"></div>
              </div>
              <div className="absolute -top-0.5 sm:-top-1 left-0.5 sm:left-1">
                <div className="w-0.5 h-0.5 bg-blue-300 rounded-full opacity-80"></div>
              </div>
              <div className="absolute -top-2 sm:-top-3 left-1 sm:left-2">
                <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full opacity-70"></div>
              </div>
            </div>

             {/* Search Input with animated text rotation */}
             <div className="flex-1 mx-3 sm:mx-4 relative overflow-hidden h-5 sm:h-6">
               {searchQuery === '' && (
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   {placeholders.map((placeholder, index) => (
                     <div
                       key={index}
                       className={`absolute transition-all duration-700 ease-in-out 
                                 font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                                 text-sm sm:text-base text-white/70 ${
                         index === currentPlaceholder
                           ? 'translate-y-0 opacity-100'
                           : index === (currentPlaceholder - 1 + placeholders.length) % placeholders.length
                           ? '-translate-y-full opacity-0'
                           : 'translate-y-full opacity-0'
                       }`}
                     >
                       {placeholder}
                     </div>
                   ))}
                 </div>
               )}
               <input
                 type="text"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-transparent text-white outline-none text-center relative z-10
                           font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                           text-sm sm:text-base"
               />
             </div>

            {/* Send Button */}
            <div className="flex items-center justify-center cursor-pointer 
                           w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                           rounded-md sm:rounded-[6px] 
                           bg-[#272B34]">
              <IoPaperPlane className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Why Choose Us */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        {/* Main Heading */}
        <h2 className="text-center mb-4 sm:mb-6 max-w-4xl 
                      font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                      font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                      leading-tight tracking-tight text-center text-[#C8C2BD]">
          Why Choose Us?
        </h2>

        {/* Descriptive Text */}
        <div className="text-white max-w-3xl 
                       font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont] 
                       font-light text-sm sm:text-base leading-relaxed tracking-wide text-center">
          <p className="mb-3 sm:mb-4">
            At Estimating Buddies, we believe accuracy, speed, and trust define successful construction projects. Our team is committed to delivering detailed cost estimates and material takeoffs that help you plan smarter, bid competitively, and avoid costly surprises.
          </p>
          <p className="mb-3 sm:mb-4">
            We use advanced estimating tools and proven industry practices to ensure precision in every project, no matter the size or complexity. With fast turnaround times, affordable pricing, and transparent communication, we make estimating simple and stress-free.
          </p>
          <p>
            Choosing Estimating Buddies means gaining a reliable partner who understands your unique project needs and works with you to achieve the best results.
          </p>
        </div>
      </div>
    </div>
  );
}