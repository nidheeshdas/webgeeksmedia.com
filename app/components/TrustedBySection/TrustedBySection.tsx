import React from 'react';

const TrustedBySection: React.FC = () => {
  const logos = [
    { name: 'Company 1', src: 'https://via.placeholder.com/150x50?text=Logo1' },
    { name: 'Company 2', src: 'https://via.placeholder.com/150x50?text=Logo2' },
    { name: 'Company 3', src: 'https://via.placeholder.com/150x50?text=Logo3' },
    { name: 'Company 4', src: 'https://via.placeholder.com/150x50?text=Logo4' },
    { name: 'Company 5', src: 'https://via.placeholder.com/150x50?text=Logo5' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-8">Trusted by</h2>
        <div className="flex justify-center items-center space-x-8">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-8" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;