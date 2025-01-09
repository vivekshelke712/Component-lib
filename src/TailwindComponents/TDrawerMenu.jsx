import React, { useState } from "react";

const TDrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleDrawer}
        className="p-2 bg-blue-600 text-white rounded-md focus:outline-none md:hidden"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Drawer Menu */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-gray-800 text-white w-64 p-4 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-3">
          <li>
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay (closes menu when clicked outside) */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default TDrawerMenu;
