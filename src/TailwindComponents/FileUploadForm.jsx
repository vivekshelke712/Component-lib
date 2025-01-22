// Import necessary libraries
import React, { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle form submission (can be customized as needed)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("Selected file:", file);
      alert(`File uploaded: ${file.name}`);
    } else {
      alert("Please select a file before submitting.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          File Upload Form
        </h2>

        {/* File Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fileInput"
          >
            Select a file
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Display selected file name */}
        {file && (
          <div className="mb-4 text-gray-600 text-sm">
            Selected File: <span className="font-medium">{file.name}</span>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileUploadForm;
