import { useState } from "react";

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Button to toggle the popover */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      >
        Toggle Popover
      </button>

      {/* Popover content */}
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Popover Title</h3>
            <p className="text-sm text-gray-600">
              This is the content inside the popover. You can put anything here!
            </p>
          </div>
          <div className="border-t px-4 py-2 bg-gray-50 text-right">
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-600 hover:underline focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
