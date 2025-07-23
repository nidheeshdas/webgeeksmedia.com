import React from 'react';
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  upcoming?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, upcoming }) => {
  return (
    <div className="relative w-full max-w-[285px] h-[320px] sm:h-[347px] bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 group cursor-pointer">
      {upcoming && (
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-yellow-300">
          Upcoming
        </div>
      )}
      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary-purple transition-all duration-300 group-hover:bg-primary-purple group-hover:scale-110">
        <img src={`/icons/${icon}.svg`} alt={`${title} icon`} className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 text-text-primary transition-colors duration-300 group-hover:text-primary-purple">{title}</h3>
      <p className="text-gray-primary mt-2 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;