'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy2IYg6K9IEJPNL1vMWJwbrfmzE67brgp8xAfW5KRP2nF9lvAwQTIMuWDoHN7CQuP11w/exec';

    // Show success immediately for better UX (after 300ms)
    setTimeout(() => {
      setShowThankYou(true);
      setIsSubmitting(false);
    }, 500);

    // Send data to Google Sheets in background
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then(() => {
      console.log('Form submitted successfully:', formData);
    }).catch((error) => {
      console.error('Error submitting form:', error);
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });

    // Hide popup after 1 second
    setTimeout(() => {
      setShowThankYou(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-up {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 slide-up">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-white text-3xl font-bold mb-2">Thank You!</h2>
            <p className="text-blue-100 text-lg">Your message has been sent successfully. We&apos;ll get back to you soon!</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white mb-4 font-black text-[69.03px] leading-[80%] tracking-[-0.03em]">
            Get in <span className="bg-gradient-to-r from-white via-[#2997FF] to-[#0083FF] bg-clip-text text-transparent">touch</span>
          </h1>
          <p className="text-gray-300 font-medium text-[13.24px] leading-[0%] tracking-normal">
            Reach out, and let&apos;s create a universe of possibilities together!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Combined Container */}
          <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Side - Form */}
              <div>
                <h2 className="text-white mb-2 font-semibold text-[28.97px] leading-[100%] tracking-[-0.02em]">Let&apos;s connect</h2>
                <p className="text-gray-400 mb-4 font-normal text-[15.45px] leading-[100%] tracking-[-0.01em]">
                  Let&apos;s align! Reach out and let the magic of <br />collaboration illuminate our skies.
                </p>

                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 bg-opacity-50 text-white placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-900 bg-opacity-50 text-white placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 bg-opacity-50 text-white placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 bg-opacity-50 text-white placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-900 bg-opacity-50 text-white placeholder-gray-500 px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none text-sm"
                  />

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm bg-gradient-to-r from-[#2991F4] to-transparent"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="flex flex-col justify-center relative min-h-[300px]">
                <a 
                  href="https://maps.app.goo.gl/fMW4FN4Yo48bWuhq5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer relative w-full h-full"
                >
                  <Image 
                    src="/images/map.jpg" 
                    alt="Location Map"
                    fill
                    className="rounded-xl shadow-lg object-cover hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}