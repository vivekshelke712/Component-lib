import React, { useState } from "react";

const TBasicModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={openModal}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              Basic Modal Title
            </h2>
            <p className="mt-4 text-gray-600">
              This is a simple modal component. You can add any content you like
              here.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TBasicModal;
