import React from 'react';

const imgStar1 = "http://localhost:3845/assets/3cf982fc0d0488194a0d98cf2b209b260420854e.svg";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <div key={index} className="relative shrink-0 size-6">
          <div
            className="absolute bottom-[15.312%] left-[9.861%] right-[9.861%] top-[7.986%]"
            style={
              {
                "--fill-0": `${index < rating ? 'rgba(255, 199, 40, 1)' : 'rgba(217, 217, 217, 1)'}`,
              } as React.CSSProperties
            }
          >
            <img
              alt="star"
              className="block max-w-none size-full"
              loading="lazy"
              src={imgStar1}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarRating;