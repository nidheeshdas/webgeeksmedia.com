import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    {
      href: '#services',
      label: 'Services',
      subLinks: [
        { href: '#seo-audit', label: 'SEO Audit' },
        { href: '#wordpress-care', label: 'WordPress Care' },
        { href: '#content-writing', label: 'Content Writing' },
        { href: '#link-building', label: 'Link Building' },
      ]
    },
    { href: '#about', label: 'About' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="relative flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[70px] sm:h-[80px] lg:h-[100px] bg-white border-b shadow-sm">
        <Logo />
        <div className="hidden lg:flex">
          <Navigation links={navLinks} />
        </div>
        <div className="hidden lg:block">
          <Button variant="primary">Connect with us</Button>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-gray-600 mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </header>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b">
              <div className="text-lg font-bold text-gray-800">Menu</div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                aria-label="Close mobile menu"
              >
                <div className="w-6 h-0.5 bg-gray-600 rotate-45 translate-y-0.5"></div>
                <div className="w-6 h-0.5 bg-gray-600 -rotate-45 -translate-y-0.5"></div>
              </button>
            </div>
            
            <nav className="p-5">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-lg text-gray-700 hover:text-purple-600 py-2"
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </a>
                    {link.subLinks && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.href}>
                            <a
                              href={subLink.href}
                              className="block text-gray-600 hover:text-purple-600 py-1"
                              onClick={toggleMobileMenu}
                            >
                              {subLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t">
                <Button variant="primary" className="w-full" onClick={toggleMobileMenu}>
                  Connect with us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;