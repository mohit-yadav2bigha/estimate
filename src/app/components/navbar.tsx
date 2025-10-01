'use client';
import { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Google Apps Script Web App URL - Replace with your actual URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBFbWCja3Gc1Qe9RDhuqLZqYan3vlkrWpnAuf8xGzUlr3pvcCcqQZAdFdS3-Wi2rag/exec';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setSubmitStatus('idle');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
    setSubmitStatus('idle');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Show success immediately for better UX
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
    }, 500);

    // Send data to Google Sheets in background
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        timestamp: new Date().toISOString()
      })
    }).then(() => {
      console.log('Form submitted:', formData);
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });

    // Close modal after 1 second
    setTimeout(() => {
      handleModalClose();
    }, 1000);
  };

  const menuItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: false },
    { name: 'Trade', href: '/Trade', hasDropdown: false },
    { name: 'Blogs', href: '/Blogs', hasDropdown: false },
    { name: 'Contact Us', href: '/contact', hasDropdown: false },
  ];

  return (
    <>
      {/* Spacer div to push content below fixed navbar */}
      <div className="h-16 sm:h-20"></div>
      
      <header className="fixed top-0 w-full z-50 h-16 sm:h-20 bg-black shadow-md shadow-black/20">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 sm:py-4 text-white h-full">
          
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={45} 
                height={40} 
                className="cursor-pointer sm:w-[57px] sm:h-[50px]"
              />
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-white hover:text-cyan-400 transition duration-200 text-base font-light"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <button 
              onClick={handleModalOpen}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg transition duration-200 group relative overflow-hidden cursor-pointer"
              style={{
                width: '164px',
                height: '41px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '133%'
              }}
            >
              <span className="text-white font-light z-10 relative">Get Quotes</span>
              <FiArrowUpRight 
                className="text-blue-500 group-hover:text-blue-400 transition duration-200" 
                style={{
                  width: '20px',
                  height: '20px'
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button - Right Side */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition duration-200 p-2 rounded-md hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full right-0 bg-black border-t border-gray-800 shadow-lg w-48">
            <div className="px-3 py-2 space-y-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block py-2 px-2 text-white hover:text-cyan-400 hover:bg-gray-800 rounded transition duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleModalOpen();
                }}
                className="flex items-center gap-2 py-2 px-2 text-white hover:text-cyan-400 hover:bg-gray-800 rounded transition duration-200 text-sm w-full text-left"
              >
                Get Quotes
                <FiArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleModalClose}
        >
          <div 
            className="relative bg-[#2a2a2a] rounded-lg p-8 w-[90%] max-w-md shadow-2xl border-2 border-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="text-2xl" />
            </button>

            {/* Success/Error Message */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-md">
                <p className="text-green-400 text-sm text-center">
                  Form submitted successfully! ✓
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-md">
                <p className="text-red-400 text-sm text-center">
                  Error submitting form. Please try again.
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-white text-sm mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2.5 text-white font-medium rounded-md transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(88.59deg, #2991F4 0.53%, rgba(24, 84, 142, 0) 98.31%)'
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Get quote'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}