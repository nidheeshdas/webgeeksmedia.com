import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header: React.FC = () => {
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white border-b">
      <Logo />
      <Navigation links={navLinks} />
      <Button>Connect with us</Button>
    </header>
  );
};

export default Header;