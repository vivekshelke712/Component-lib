import React from "react";

const TBlogPostCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Blog Post Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 hover:text-blue-500 transition">
            10 Tips for Learning React Faster
          </h2>
          <p className="text-gray-600 mt-2">
            Discover essential tips and tricks to boost your React skills and
            build better applications in less time.
          </p>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600 text-sm">Jan 12, 2025</p>
              </div>
            </div>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TBlogPostCard;
