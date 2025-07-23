import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-gray-600 hover:text-gray-900">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;