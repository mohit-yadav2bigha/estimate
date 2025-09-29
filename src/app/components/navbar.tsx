'use client';
import { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const menuItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Projects', href: '/projects', hasDropdown: false },
    { name: 'News', href: '/news', hasDropdown: false },
    { name: 'Team', href: '/team', hasDropdown: false },
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
            <Link 
              href="/contact" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg transition duration-200 group relative overflow-hidden"
              style={{
                width: '164px',
                height: '41px',
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '133%'
              }}
            >
              <span className="text-white font-light z-10 relative">Contact Us</span>
              <FiArrowUpRight 
                className="text-blue-500 group-hover:text-blue-400 transition duration-200" 
                style={{
                  width: '20px',
                  height: '20px'
                }}
              />
            </Link>
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
              <Link 
                href="/contact" 
                className="flex items-center gap-2 py-2 px-2 text-white hover:text-cyan-400 hover:bg-gray-800 rounded transition duration-200 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <FiArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}