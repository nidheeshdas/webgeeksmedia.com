import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Cta: React.FC = () => {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto">
        <div className="bg-gray-900 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg text-gray-300">Let us earn your trust</h2>
            <p className="text-5xl font-extrabold text-white mt-2">Starting With Just $49</p>
            <Button variant="primary" className="mt-6">
              Start Now
            </Button>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-green-200 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="lightning-bolt" className="w-24 h-24 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;