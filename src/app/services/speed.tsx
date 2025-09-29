'use client';
import React from 'react';

export default function Speed() {

  return (
    <div className="relative w-full bg-black overflow-hidden min-h-[550px]">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Cards Section */}
      <div className="relative mx-auto px-2 sm:px-4 lg:px-0 w-full max-w-[1200px] mt-[1px] mb-[5px] rounded-[32px]">
        {/* Top Row - 3 Cards on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6 mb-2 sm:mb-4 lg:mb-6 w-full">
          {/* Accuracy Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Accuracy
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  Every estimate is precise, detailed, and backed by the latest digital tools + market data.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[123px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Accuracy
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  Every estimate is precise, detailed, and backed by the latest digital tools + market data.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>

          {/* Transparency Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Transparency
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  Clear reports with no hidden numbers — clients always know what they&apos;re paying for.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[150px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Transparency
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  Clear reports with no hidden numbers — clients always know what they&apos;re paying for.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>

          {/* Speed Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Speed
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  Fast turnaround times without compromising on quality, helping clients meet deadlines.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[100px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Speed
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  Fast turnaround times without compromising on quality, helping clients meet deadlines.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 Cards on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-6 w-full">
          {/* Client Support Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Client Support
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  Personalized service for contractors, architects, subcontractors, and homeowners alike.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[200px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Client Support
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  Personalized service for contractors, architects, subcontractors, and homeowners alike.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>

          {/* Scalability Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Scalability
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  From small renovels to large industrial projects we can adapt to every project size.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[150px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Scalability
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  From small renovels to large industrial projects we can adapt to every project size.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-300 w-full h-[140px] sm:h-[180px] lg:h-[243px] rounded-2xl lg:rounded-[32px] bg-[#1E1E1E]"
          >
            <div className="absolute inset-0 bg-[#2991F4] rounded-2xl lg:rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {/* Mobile Layout */}
              <div className="lg:hidden p-3 h-full flex flex-col font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="flex justify-between items-start mb-1">
                  <div className="text-white font-[556] text-[0.9rem] leading-[140%] tracking-[0px]">
                    Expertise
                  </div>
                  
                  {/* Click Button */}
                  <div className="relative flex items-center justify-center text-white cursor-pointer transition-all duration-300 rounded-full px-2 py-1 text-[0.6rem] font-[556] leading-[140%] bg-gradient-to-r from-[#2991F4] to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Click</span>
                  </div>
                </div>
                
                <div className="text-white font-[350] text-[0.6rem] leading-[100%] tracking-[0%] flex-1">
                  A skilled team with both field experience and technical know-how.
                </div>
                
                {/* Arrow */}
                <div className="flex justify-end mt-1">
                  <div className="text-white flex items-center justify-center w-4 h-4 text-[0.8rem]">
                    {'>'}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original */}
              <div className="hidden lg:block font-[SF_Compact,system-ui,-apple-system,BlinkMacSystemFont]">
                <div className="absolute text-white w-[120px] h-[20px] top-[50px] left-[30px] font-[556] text-[30px] leading-[140%] tracking-[0px]">
                  Expertise
                </div>
                
                <div className="absolute text-white w-[320px] h-[58px] top-[100px] left-[30px] font-[350] text-[12px] leading-[100%] tracking-[0%]">
                  A skilled team with both field experience and technical know-how.
                </div>
                
                {/* Click Button */}
                <div className="absolute flex items-center justify-center text-white cursor-pointer transition-all duration-300 w-[75px] h-[24px] top-[50px] left-[275px] rounded-[40px] bg-gradient-to-r from-[#2991F4] to-transparent p-2 gap-[10px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-[556] text-[12px] leading-[140%] tracking-[0px]">
                    Click
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="absolute text-white flex items-center justify-center w-6 h-6 top-[179px] left-[326px] text-[18px]">
                   {'>'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}