'use client';
import { useState } from 'react';

export default function Accurate() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div 
          className="text-white mb-3 sm:mb-6 text-center flex items-center justify-center w-[90%] max-w-[683px] h-auto min-h-[120px] sm:min-h-[120px] font-[790] text-[clamp(1.8rem,7vw,76.25px)] leading-[1.5] sm:leading-[1.0] tracking-[-0.3px] sm:tracking-[-1.2px]"
          style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
        >
          Accurate. Fast.<br />
          Detailed.<br />
          Professional
        </div>

        {/* Subtitle */}
        <div 
          className="text-white mb-4 sm:mb-8 text-center w-[90%] max-w-[775px] h-auto font-[656] text-[clamp(0.8rem,3vw,20px)] leading-[1.6] sm:leading-[1.1] tracking-[0%] uppercase"
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

      {/* Popup Modal - Shows when Know More is clicked */}
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
                  At Estimating Buddies, we ensure that each winning project begins with the correct numbers. Our professional staff of construction estimators offers more than numbers—we offer clarity, confidence, and the competitive advantage you need to secure bids and manage costs.
                </p>
                
                <p>
                  If you're a general contractor, subcontractor, architect, or developer, our customized construction estimating service is developed to save time, limit risk, and keep your projects within budget. Our methodology combines industry expertise with tools such as PlanSwift, Bluebeam, and RSMeans to provide cost information with accuracy you can count on.
                </p>
                
                <p>
                  Whether working on residential, large commercial, or industrial constructions, we provide precise quantity takeoffs, material takeoffs, and budget estimates to assist you in planning smarter and building with confidence.
                </p>
                
                <p>
                  Selecting Estimating Buddies as a partner helps you to be aware of your challenges—tight timelines, competitive markets, and design changes, with rapid turnaround time, open communication, and accurate estimates. Let us drive your blueprints into actionable insights.
                </p>
                
                <p>
                  Upload your plans today and learn how our construction estimating can change the way you bid, budget, and succeed. With years of hands-on experience, our team makes sure every estimate is clear and reliable.
                </p>
                
                <p>
                  From domestic dwellings to intricate commercial and industrial construction, we provide estimates that are not only accurate but also feasible for practical implementation. Each aspect is drawn up with attention to detail, adhering to the known guidelines and following best practices of the Estimators Organization and the AACE (Association for the Advancement of Cost Engineering).
                </p>
                
                <p>
                  This commitment ensures that all estimates provide the highest standard of industry accuracy and reliability.
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