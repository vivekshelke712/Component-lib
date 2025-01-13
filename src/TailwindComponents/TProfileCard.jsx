import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="h-40  flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white -mt-12"
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
          <p className="text-gray-600 mt-2">
            Passionate about creating scalable and user-friendly applications.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .73.593 1.324 1.325 1.324h21.351c.73 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.324-1.325zm-15.346 20.979h-3.608v-10.918h3.608v10.918zm-1.803-12.479c-1.153 0-2.086-.937-2.086-2.09s.933-2.091 2.086-2.091c1.155 0 2.09.938 2.09 2.091s-.935 2.09-2.09 2.09zm15.349 12.479h-3.608v-5.924c0-1.411-.025-3.228-1.965-3.228-1.967 0-2.268 1.536-2.268 3.121v6.031h-3.607v-10.918h3.464v1.492h.05c.481-.911 1.66-1.868 3.418-1.868 3.654 0 4.33 2.404 4.33 5.529v5.765z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.227 3.356 9.632 8.015 11.206.586.107.796-.254.796-.566 0-.281-.011-1.038-.016-2.037-3.263.709-3.951-1.571-3.951-1.571-.534-1.355-1.304-1.717-1.304-1.717-1.065-.728.081-.713.081-.713 1.18.082 1.801 1.213 1.801 1.213 1.047 1.797 2.747 1.277 3.418.977.107-.759.41-1.277.746-1.572-2.606-.298-5.347-1.303-5.347-5.803 0-1.283.461-2.331 1.216-3.154-.121-.299-.527-1.506.116-3.141 0 0 .989-.316 3.241 1.204.939-.261 1.947-.391 2.949-.396.999.005 2.008.135 2.949.396 2.25-1.52 3.238-1.204 3.238-1.204.645 1.635.239 2.842.117 3.141.757.823 1.215 1.871 1.215 3.154 0 4.511-2.747 5.5-5.358 5.793.422.366.798 1.096.798 2.212 0 1.597-.014 2.889-.014 3.281 0 .315.208.678.801.562 4.646-1.577 8-5.981 8-11.205 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
