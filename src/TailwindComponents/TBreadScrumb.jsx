import React from "react";

const StaticBreadcrumb = () => {
  return (
    <nav className="text-gray-600 text-sm" aria-label="breadcrumb">
      <ul className="flex space-x-2">
        <li className="flex items-center">
          <a href="/" className="hover:text-blue-400">Home</a>
        </li>
        <li className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <a href="/products" className="hover:text-blue-400">Products</a>
        </li>
        <li className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <a href="/products/electronics" className="hover:text-blue-400">Electronics</a>
        </li>
        <li className="flex items-center">
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-blue-600 font-semibold">Mobile Phones</span>
        </li>
      </ul>
    </nav>
  );
};

export default StaticBreadcrumb;
