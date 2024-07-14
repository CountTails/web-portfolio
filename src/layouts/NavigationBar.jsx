import React, { useState } from 'react';
import logo from '../assets/react.svg';

function Navbar({ title, navigationLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 bg-blue-950 text-white flex items-center justify-between px-8 py-4">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="Website Logo" className="h-8 mr-3" />
        <h1 className="text-xl font-semibold max-sm:hidden">{title}</h1>
      </div>

      {/* Navigation Links (Large Screens) */}
      <ul className="hidden md:flex items-center">
        {navigationLinks.map((link) => (
          <li key={link.navtext} className="mr-6">
            <a href={link.navpath}>{link.navtext}</a>
          </li>
        ))}
      </ul>

      {/* Toggle Button (Small Screens) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleDropdown}
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Navigation Links Dropdown (Small Screens) */}
      <ul
        className={`md:hidden absolute bg-blue-950 text-white px-4 py-2 mt-2 right-4 top-12 ${isOpen ? 'block' : 'hidden'
          }`}
      >
        {navigationLinks.map((link) => (
          <li key={link.navtext} className="py-1">
            <a href={link.navpath} className="block text-left">{link.navtext}</a>
          </li>
        ))}
      </ul>
    </nav>
  );

}

export default Navbar;
