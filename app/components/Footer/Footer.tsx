import React from 'react';
import Icon from '../Icon/Icon';

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-gray-800 font-bold">
          WebGeeks Media
        </div>
        <div className="text-gray-500">
          © 2025 WebGeeksMedia. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">
            <Icon name="facebook" className="w-6 h-6 text-gray-800" />
          </a>
          <a href="#" aria-label="Twitter">
            <Icon name="twitter" className="w-6 h-6 text-gray-800" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Icon name="linkedin" className="w-6 h-6 text-gray-800" />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon name="instagram" className="w-6 h-6 text-gray-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;