import React from 'react';
import Icon from '../Icon/Icon';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-green-50 px-4 py-24 text-center md:py-32">
      <h1 className="text-5xl font-extrabold text-gray-800 md:text-6xl">
        Unlock Your Website's True Potential
      </h1>
      <p className="mt-4 text-lg text-gray-500">
        We're not just another SEO agency — we're your digital growth partner.
      </p>
      <div className="mt-8">
        <button className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-600 shadow-sm transition-colors hover:bg-gray-100">
          <Icon name="compass" className="h-5 w-5" />
          <span>Explore Services</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;