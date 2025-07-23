import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
  const baseClasses = 'px-[21px] py-[17px] rounded-[30px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 min-h-[44px] touch-manipulation';
  const variantClasses = {
    primary: 'bg-primary-purple text-white hover:bg-secondary-purple focus:ring-purple-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 shadow-md hover:shadow-lg',
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;