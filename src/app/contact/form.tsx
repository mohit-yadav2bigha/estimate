'use client';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Main Container */}
      <div className="w-full bg-gray-900" style={{ background: '#111111' }}>
        {/* Mobile Layout */}
        <div className="block lg:hidden p-4 sm:p-6">
          {/* Mobile Header */}
          <div className="mb-8">
            <h1 className="text-white text-3xl sm:text-4xl font-semibold mb-2 font-sans">
              GET IN TOUCH
            </h1>
            <p className="text-white text-sm font-light font-sans">
              Contact us if you need supports for next event
            </p>
          </div>

          {/* Mobile Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-white text-sm font-normal font-sans">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="text-white bg-transparent border border-white/40 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white text-sm font-normal font-sans">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="text-white bg-transparent border border-white/40 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-white text-sm font-normal font-sans">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-white bg-transparent border border-white/40 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white text-sm font-normal font-sans">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="text-white bg-transparent border border-white/40 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2">
              <label className="text-white text-sm font-normal font-sans">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="text-white bg-transparent border border-white/40 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="text-white font-bold text-sm rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(88.59deg, #2991F4 0.53%, rgba(24, 84, 142, 0) 98.31%)',
                }}
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Mobile Social Section */}
          <div className="mt-12 bg-blue-500 rounded-lg p-6 text-center">
            <div className="mb-4">
              <img 
                src="/images/map.jpg" 
                alt="Map" 
                onClick={() => window.open('https://www.google.com/maps/dir//13555+SE+36th+St+Suite+100+Bellevue,+WA+98006+USA/@47.5784724,-122.1593758,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906ea9ae6b3f9d:0x7e8acf9d27cb0a36!2m2!1d-122.1593758!2d47.5784724?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                className="w-full h-48 sm:h-64 object-cover rounded cursor-pointer mx-auto"
              />
            </div>
            
            <div className="text-white">
              <p className="text-sm font-normal mb-4">Follow us on</p>
              <div className="flex justify-center gap-3">
                {[
                  { icon: FaFacebook, name: 'Facebook', url: 'https://facebook.com' },
                  { icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com' },
                  { icon: FaYoutube, name: 'YouTube', url: 'https://youtube.com' },
                  { icon: FaInstagram, name: 'Instagram', url: 'https://instagram.com' }
                ].map(({ icon: Icon, name, url }) => (
                  <div
                    key={name}
                    onClick={() => window.open(url, '_blank')}
                    className="bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  >
                    <Icon size={16} className="text-blue-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full h-screen">
          {/* Left Side - Contact Form */}
          <div className="w-1/3 ml-44 flex flex-col justify-end pb-24 p-8" style={{ boxShadow: '0px 0px 28.22px 35.27px #2997FF1C' }}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("/images/f2.jpg")`,
                backgroundSize: '75%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Content Container */}
            <div className="relative z-10">
              {/* GET IN TOUCH Heading */}
              <h1 className="text-white text-4xl font-semibold mb-4 font-sans">
                GET IN TOUCH
              </h1>

              {/* Subtitle */}
              <p className="text-white text-sm font-light mb-8 font-sans">
                Contact us if you need supports for next event
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row - First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-normal font-sans">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="text-white bg-transparent border border-white/40 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-normal font-sans">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="text-white bg-transparent border border-white/40 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Second Row - Email and Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-normal font-sans">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-white bg-transparent border border-white/40 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-white text-sm font-normal font-sans">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-white bg-transparent border border-white/40 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-sm font-normal font-sans">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="text-white bg-transparent border border-white/40 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Send Message Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="text-white font-bold text-sm rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(88.59deg, #2991F4 0.53%, rgba(24, 84, 142, 0) 98.31%)',
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Map and Social Media */}
          <div className="flex-1 flex flex-col justify-end p-8 relative">
            {/* Background Color */}
            <div 
              className="absolute opacity-100"
              style={{
                background: '#2997FF',
                backgroundSize: '30%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                width: '73%',
                height: '88%',
                top: '0%',
                left: '40%',
                transform: 'translateX(-50%)',
                boxShadow: '0px 0px 28.22px 35.27px #2997FF1C',
                borderTopLeftRadius: '87px',
                borderBottomLeftRadius: '87px'
              }}
            />
            {/* Map Container */}
            <div className="mb-8 w-3/4 max-w-lg ml-15 relative z-10">
              <img 
                src="/images/map.jpg" 
                alt="Map" 
                onClick={() => window.open('https://www.google.com/maps/dir//13555+SE+36th+St+Suite+100+Bellevue,+WA+98006+USA/@47.5784724,-122.1593758,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54906ea9ae6b3f9d:0x7e8acf9d27cb0a36!2m2!1d-122.1593758!2d47.5784724?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                className="w-100 h-99 rounded cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </div>

            {/* Social Media Section */}
            <div className="text-white text-center relative z-10 pb-30">
              <div className="flex items-center justify-center gap-4">
                <p className="text-sm font-normal">Follow us on</p>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, name: 'Facebook', url: 'https://facebook.com' },
                    { icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com' },
                    { icon: FaYoutube, name: 'YouTube', url: 'https://youtube.com' },
                    { icon: FaInstagram, name: 'Instagram', url: 'https://instagram.com' }
                  ].map(({ icon: Icon, name, url }) => (
                    <div
                      key={name}
                      onClick={() => window.open(url, '_blank')}
                      className="bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    >
                      <Icon size={14} className="text-blue-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}