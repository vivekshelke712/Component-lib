import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Import icons

const TSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className={`${isOpen ? 'text-xl' : 'hidden'} font-bold`}>TSidebar</h1>
          <FaBars
            className="cursor-pointer text-lg"
            onClick={toggleSidebar}
          />
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 p-4">
          <a
            href="#"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaHome />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaUser />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>Profile</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaCog />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-md mt-auto"
          >
            <FaSignOutAlt />
            <span className={`${isOpen ? 'block' : 'hidden'}`}>Logout</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4 text-gray-700">Welcome to your sidebar example.</p>
      </div>
    </div>
  );
};

export default TSidebar;
