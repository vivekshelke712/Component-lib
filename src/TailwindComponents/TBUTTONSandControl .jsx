import React, { useState } from 'react';

const TBUTTONSandControl = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-6 space-y-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
      {/* Buttons */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">Buttons</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
          Primary Button
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
          Secondary Button
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-300">
          Danger Button
        </button>
      </div>

      {/* Toggle Control */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-700">Toggle Control</h2>
        <div className="flex items-center">
          <span className="mr-3 text-gray-700">{toggle ? 'On' : 'Off'}</span>
          <button
            onClick={() => setToggle(!toggle)}
            className={`w-12 h-6 rounded-full ${
              toggle ? 'bg-green-500' : 'bg-gray-300'
            } relative focus:outline-none`}
          >
            <span
              className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-transform ${
                toggle ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TBUTTONSandControl;
