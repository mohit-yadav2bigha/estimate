'use client';
import Image from 'next/image';

export default function Plans() {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[550px] relative bg-black">
      {/* Background Image */}
      <Image
        src="/images/laptop.jpg"
        alt="Laptop"
        fill
        className="w-full h-full object-contain"
        priority
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-6xl px-4 md:px-6 lg:px-8">
          {/* Left Side Content */}
          <div className="flex flex-col gap-8 md:gap-6 lg:gap-8 mt-32 md:mt-16 lg:ml-9 items-start lg:items-start" style={{ marginTop: '270px' }}>
            {/* Text Block */}
            <div 
              className="text-white text-left w-[80px] md:w-[150px] lg:w-[180px] h-[50px] md:h-[70px] lg:h-[80px] text-[10px] md:text-sm lg:text-lg leading-tight md:leading-none lg:leading-none opacity-100"
              style={{
                fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                fontWeight: '350',
                fontStyle: 'normal',
                letterSpacing: '0%'
              }}
            >
              We simplify estimating with accurate reports, helping projects succeed every time.
            </div>
            
            {/* Button Group */}
            <div 
              className="flex flex-col gap-3 lg:gap-6 w-[60px] md:w-[130px] lg:w-[160px] h-[70px] md:h-[95px] lg:h-[110px] opacity-100"
              style={{
                gap: '28px'
              }}
            >
              {/* Estimating Button */}
              <button
                className="text-white border border-white rounded-full flex items-center justify-center transition-opacity hover:opacity-100 w-full lg:w-auto w-[50px] md:w-[120px] lg:w-[160px] h-[24px] md:h-[34px] lg:h-[40px] opacity-90 rounded-[10px] md:rounded-[20px] lg:rounded-[25px] border-[0.75px] px-[6px] md:px-[20px] lg:px-[30px] py-[1px] md:py-[4px] lg:py-[6px] text-[8px] md:text-sm lg:text-lg leading-[12px] md:leading-[20px] lg:leading-[26px] text-center"
                style={{
                  gap: '15px',
                  fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                  fontWeight: '556',
                  fontStyle: 'normal',
                  letterSpacing: '4%'
                }}
              >
                Estimating
              </button>
              
              {/* Buddies Button */}
              <button
                className="text-white border border-white rounded-full flex items-center justify-center transition-opacity hover:opacity-100 w-full lg:w-auto w-[50px] md:w-[120px] lg:w-[160px] h-[24px] md:h-[34px] lg:h-[40px] opacity-90 rounded-[10px] md:rounded-[20px] lg:rounded-[25px] border-[0.75px] px-[6px] md:px-[20px] lg:px-[30px] py-[1px] md:py-[4px] lg:py-[6px] text-[8px] md:text-sm lg:text-lg leading-[12px] md:leading-[20px] lg:leading-[26px] text-center"
                style={{
                  gap: '15px',
                  fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                  fontWeight: '556',
                  fontStyle: 'normal',
                  letterSpacing: '4%'
                }}
              >
                Buddies
              </button>
            </div>
          </div>
          
          {/* Right Side - Laptop will be visible through the background image */}
          <div className="flex-1 relative flex items-start justify-center lg:items-center lg:justify-start lg:mr-8 -mt-40 lg:mt-0">
            {/* Laptop Screen Text Overlay */}
            <div 
              className="text-blue-500 uppercase rounded-lg text-center w-[340px] md:w-[350px] lg:w-[450px] h-[320px] md:h-[150px] lg:h-[188px] text-[clamp(16px,5vw,56px)] md:text-[clamp(16px,5vw,56px)] lg:text-[clamp(20px,6vw,56px)] leading-[20px] md:leading-[35px] lg:leading-[47px] opacity-100 z-10 ml-1 md:ml-[50px] lg:ml-[100px] block mt-0 lg:mt-0"
              style={{
                fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont',
                fontWeight: '656',
                fontStyle: 'normal'
              }}
            >
              TURNING<br/>
              COMPLEX PLANS<br/>
              INTO CLEAR<br/>
              NUMBERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
