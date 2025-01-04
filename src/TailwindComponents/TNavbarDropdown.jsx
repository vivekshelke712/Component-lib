import React, { useState } from 'react';

const TNavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">Logo</a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md">
            Menu
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TNavbarDropdown;
