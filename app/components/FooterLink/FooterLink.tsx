import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-white">
      {children}
    </a>
  );
};

export default FooterLink;