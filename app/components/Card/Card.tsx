import React from 'react';
import type { IconName } from '../Icon/Icon';
import Icon from '../Icon/Icon';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  upcoming?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, upcoming }) => {
  return (
    <div className="relative bg-white rounded-lg border border-gray-200 shadow-md p-6">
      {upcoming && (
        <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
          Upcoming
        </div>
      )}
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
        <Icon name={icon} className="h-6 w-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;