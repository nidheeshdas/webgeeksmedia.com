import React from 'react';
import Icon from '../Icon/Icon';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <Icon
          key={index}
          name="star"
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;