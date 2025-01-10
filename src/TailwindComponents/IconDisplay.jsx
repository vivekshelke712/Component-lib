import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa'; // Example Icon
import { MdCopyAll } from 'react-icons/md';

const IconDisplay = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const iconCode = `<FaReact />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(iconCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset success message after 2 seconds
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Icon Display */}
      <div className="text-center mb-4">
        <FaReact className="text-blue-500 text-6xl mx-auto" />
        <p className="text-lg font-semibold text-gray-700 mt-2">FaReact</p>
      </div>

      {/* Code Display and Copy Button */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <pre className="text-sm font-mono bg-gray-100 p-2 rounded">
          {iconCode}
        </pre>
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 mt-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          <MdCopyAll className="mr-2 text-lg" /> Copy Code
        </button>
        {copySuccess && (
          <p className="text-green-500 text-sm mt-2">Code copied to clipboard!</p>
        )}
      </div>
    </div>
  );
};

export default IconDisplay;
