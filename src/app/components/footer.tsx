// components/Footer.tsx
'use client';
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaPhone,
  FaArrowUp,
  FaYoutube,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white px-4 py-4 lg:px-16 lg:py-6 relative bg-black">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* Left Side - Logo and Company Info */}
          <div className="lg:order-1 flex flex-col items-start w-full lg:w-auto">
            {/* Logo */}
            <div className="w-10 h-10 lg:w-12 lg:h-[50px] mb-4 lg:mb-6">
              <img 
                src="/images/logo.png" 
                alt="Estimating Buddies Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Company Text */}
            <div className="w-full lg:w-[310px]">
              <h2 
                className="text-white text-[25px] font-bold leading-[34px] tracking-[-1.2px] uppercase mb-4 lg:mb-6" 
                style={{ fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 790 }}
              >
                EMPOWERING AEC PROFESSIONALS WORLDWIDE WITH FUTURE-READY BIM SKILLS.
              </h2>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 lg:gap-[22px]">
                <a href="https://www.facebook.com/people/Estimating-Buddies/61556785539225/?_rdr" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-500 transition-colors w-3 lg:w-[11px]">
                  <FaFacebookF />
                </a>
                <a href="https://x.com/estimatingbudd/status/1789996766273610112" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-500 transition-colors w-3 lg:w-[11px]">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/estimatingbuddies/" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-500 transition-colors w-3 lg:w-[11px]">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/posts/estimating-buddies_estimatingbuddies-designandplanning-costmanagement-activity-7266790463313977345-NfwO/" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-500 transition-colors w-3 lg:w-[11px]">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/draftingbuddies" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-blue-500 transition-colors w-3 lg:w-[11px]">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Center and Right Side - Side by side on mobile, separate on laptop */}
          <div className="flex flex-row lg:contents">
            {/* Center - Navigation Pages */}
            <div className="lg:order-2 w-1/2 lg:w-auto">
              <h4 className="text-white font-semibold mb-4 lg:mb-7 text-sm lg:text-base ml-0 lg:ml-[300px]">Pages</h4>
              <div className="space-y-3 lg:space-y-4 ml-0 lg:ml-[300px]">
                <a href="/" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Home
                </a>
                <a href="/about" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  About
                </a>
                <a href="/services" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Service
                </a>
                <a href="/contact" className="block text-white hover:text-blue-500 transition-colors text-xs lg:text-sm">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="lg:order-3 w-1/2 lg:w-[418px]">
              <h4 className="text-white font-semibold mb-4 lg:mb-6 text-sm lg:text-base ml-0 lg:ml-[100px]">Contact us</h4>
              <div className="space-y-4 lg:space-y-6 ml-0 lg:ml-[100px]">
                {/* Email */}
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 flex items-center justify-center">
                    <span className="text-white text-xs lg:text-sm">✉</span>
                  </div>
                  <a href="mailto:contact@estimatingbuddies.com" className="text-white text-xs lg:text-sm hover:text-blue-500 transition-colors">
                    contact@estimatingbuddies.com
                  </a>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-2 lg:gap-3">
                  <FaPhone className="text-white text-xs lg:text-sm" />
                  <span className="text-white text-xs lg:text-sm">+1 512-828-1066</span>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-2 lg:gap-3">
                  <FaLocationDot className="text-white mt-1 flex-shrink-0 text-xs lg:text-sm" />
                  <div>
                    <p className="text-white text-xs lg:text-sm">13555 South East 36th Street, Suite 100,</p>
                    <p className="text-white text-xs lg:text-sm">Bellevue, WA 98006, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto mt-8 lg:mt-12">
        <div className="w-full h-px bg-[#D9DBE9] opacity-100"></div>
      </div>

      {/* Bottom Content */}
      <div className="max-w-7xl mx-auto mt-4 lg:mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs lg:text-sm">
          <p className="text-white">Copyright © 2025 BIM Americas</p>
          
          <div className="flex items-center gap-3 lg:gap-6 mt-3 lg:mt-0">
            <span className="text-white">All Rights Reserved |</span>
            <a href="/terms-and-conditions" className="text-white hover:text-blue-500 transition-colors underline">
              Terms and Conditions
            </a>
            <span className="text-white">|</span>
            <a href="/privacy-policy" className="text-white hover:text-blue-500 transition-colors underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-10 h-10 lg:w-9 lg:h-9 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 z-50"
          style={{
            bottom: '16px',
            right: '16px'
          }}
        >
          <FaArrowUp className="text-sm lg:text-sm" />
        </button>
      )}
    </footer>
  );
};

export default Footer;