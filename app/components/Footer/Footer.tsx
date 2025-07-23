import React from 'react';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
  return (
    <footer
      className="h-[97px]"
      style={{ backgroundColor: '#571aff' }}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full py-4 lg:py-0">
          {/* Logo on left */}
          <div className="flex-shrink-0 mb-2 lg:mb-0">
            <div className="text-white font-bold text-lg">
              WebGeeks Media
            </div>
          </div>
          
          {/* Copyright text centered */}
          <div className="text-white text-sm lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-2 lg:mb-0">
            © 2025 WebGeeksMedia. All rights reserved.
          </div>
          
          {/* Social media icons on right */}
          <div className="flex gap-3 sm:gap-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Icon name="facebook" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Icon name="twitter" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Icon name="linkedin" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
              <Icon name="whatsapp" className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;