import React, { useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full py-2.5 px-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
        />

        {/* Search Icon */}
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
        </span>

        {/* Clear Button */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
