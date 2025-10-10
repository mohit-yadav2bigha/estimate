'use client';

export default function Serve() {

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-[#0B0D17]">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Mobile Content */}
        <div className="px-4 py-8 space-y-6">
          {/* Main Heading */}
          <h2 
            className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            Who We Serve
          </h2>

          {/* Content Text */}
          <div 
            className="text-white text-sm sm:text-base leading-relaxed space-y-4"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            <p>
              <strong className="font-semibold">General Contractors, Subcontractors, Architects & Developers Every Step of the Way.</strong>
            </p>
            <p>
              We are convinced that strong projects are built with accurate numbers. As a reliable estimating company, we take pride in serving diverse clients who require solid insights to make informed decisions. If you&apos;re a contractor on the go, a subcontractor getting ready to bid, an architect honing designs, or a developer with investments to plan, our experts have the know-how to assist you.
            </p>
            <p>
              For builders and homeowners, we serve as your trusted building and home construction estimator, offering comprehensive budgets to avoid surprises and stay on schedule. Our residential construction estimating is particularly tailored for single-family dwellings, multifamily residences, and custom constructions—enabling you to manage costs from blueprints to ultimate handover.
            </p>
            <p>
              Our specific approach also benefits our residential, commercial, and industrial clients. We break down complex plans into clear, actionable estimates, so you can bid with confidence and manage resources effectively.
            </p>
          </div>

          {/* Know More Button */}
          <button 
            className="w-32 h-10 bg-gradient-to-r from-white/30 to-transparent rounded-lg text-white font-medium text-sm transition-all duration-300 hover:opacity-80"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            Know More
          </button>
        </div>

        {/* Mobile Image - Full image without cutting */}
          <div className="w-full h-96 bg-gradient-radial rounded-t-lg bg-contain bg-no-repeat bg-center overflow-hidden" 
             style={{ 
               backgroundImage: 'url("/download.png")'
             }}>
          <div className="w-full h-full bg-cover bg-center bg-no-repeat animate-zoom-out" 
               style={{ 
                 backgroundImage: 'url("/download.png")',
                 animationDuration: '8s',
                 animationIterationCount: 'infinite',
                 animationTimingFunction: 'ease-in-out'
               }}>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl px-8 xl:px-16 py-16 flex flex-col justify-center">
          {/* Main Heading */}
          <h2 
            className="text-white text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-8"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            Who We Serve
          </h2>

          {/* Content Text */}
          <div 
            className="text-white text-base xl:text-lg leading-relaxed space-y-6 mb-8"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            <p>
              <strong className="font-semibold text-lg">General Contractors, Subcontractors, Architects & Developers Every Step of the Way.</strong>
            </p>
            <p>
              We are convinced that strong projects are built with accurate numbers. As a reliable estimating company, we take pride in serving diverse clients who require solid insights to make informed decisions. If you&apos;re a contractor on the go, a subcontractor getting ready to bid, an architect honing designs, or a developer with investments to plan, our experts have the know-how to assist you.
            </p>
            <p>
              For builders and homeowners, we serve as your trusted building and home construction estimator, offering comprehensive budgets to avoid surprises and stay on schedule. Our residential construction estimating is particularly tailored for single-family dwellings, multifamily residences, and custom constructions—enabling you to manage costs from blueprints to ultimate handover.
            </p>
            <p>
              Our specific approach also benefits our residential, commercial, and industrial clients. We break down complex plans into clear, actionable estimates, so you can bid with confidence and manage resources effectively.
            </p>
          </div>

          {/* Know More Button */}
          <button 
            className="w-36 h-12 bg-gradient-to-r from-white/30 to-transparent rounded-lg text-white font-medium text-sm transition-all duration-300 hover:opacity-80 flex items-center justify-center"
            style={{ fontFamily: 'SF Compact, system-ui, -apple-system, BlinkMacSystemFont' }}
          >
            Know More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-radial rounded-l-lg" />
          
          {/* Image */}
          <div className="w-full h-full max-w-2xl max-h-2xl bg-contain bg-no-repeat bg-center rounded-l-lg" 
               style={{ 
                backgroundImage: 'url("/download.png")',
                animationDuration: '8s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}>
          </div>
        </div>
      </div>
    </div>
  );
}