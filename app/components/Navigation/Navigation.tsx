import React, { useState } from 'react';
import Icon from '../Icon/Icon';

interface NavLink {
  href: string;
  label: string;
  subLinks?: NavLink[];
}

interface NavigationProps {
  links: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav>
      <ul className="flex space-x-8 items-center">
        {links.map((link) => (
          <li
            key={link.href}
            className="relative"
            onMouseEnter={() => link.subLinks && setOpenMenu(link.label)}
            onMouseLeave={() => link.subLinks && setOpenMenu(null)}
          >
            <a href={link.href} className="text-gray-600 hover:text-gray-900 flex items-center">
              {link.label}
              {link.subLinks && <Icon name="arrow-right" className="w-4 h-4 ml-1 transform rotate-90" />}
            </a>
            {link.subLinks && openMenu === link.label && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.href}>
                    <a href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;