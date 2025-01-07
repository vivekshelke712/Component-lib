import React, { useState } from 'react';

const TNavigation = () => {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  // Tabs data
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'about', label: 'About' },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 text-center text-sm font-medium ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white border border-gray-200 rounded-b-md">
        {activeTab === 'home' && <p>Welcome to the Home tab!</p>}
        {activeTab === 'profile' && <p>This is the Profile tab content.</p>}
        {activeTab === 'settings' && <p>Settings tab is where you configure options.</p>}
        {activeTab === 'about' && <p>About tab provides information about this app.</p>}
      </div>
    </div>
  );
};

export default TNavigation;
