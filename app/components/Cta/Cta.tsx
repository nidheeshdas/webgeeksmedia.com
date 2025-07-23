import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Cta: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div
          className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center overflow-hidden"
          style={{ backgroundColor: '#232038' }}
        >
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute bottom-12 right-6 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">
              Let us earn your trust
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white">
              Starting with just{' '}
              <span style={{ color: '#ffc728' }}>$49</span>
            </p>
            <Button variant="primary" className="mt-6 sm:mt-8">
              Start Now
            </Button>
          </div>
          
          <div className="relative z-10 mt-8 lg:mt-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="rocket" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;