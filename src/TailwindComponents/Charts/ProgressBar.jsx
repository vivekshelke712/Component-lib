import React from "react";

const ProgressBar = () => {
  // Static progress value and label
  const progress = 70;
  const label = "Loading Progress";

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      {label && <p className="text-sm text-gray-600 mb-2">{label}</p>}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full text-center text-xs text-white flex items-center justify-center transition-all duration-300"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
