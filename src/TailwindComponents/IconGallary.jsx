import React, { useState } from 'react';
import {
  FaReact,
  FaCoffee,
  FaApple,
  FaAndroid,
  FaCar,
  FaCloud,
  FaSun,
  FaMoon,
  FaStar,
  FaTree,
} from 'react-icons/fa';
import {
  MdHome,
  MdSearch,
  MdSettings,
  MdFavorite,
  MdMenu,
  MdCheck,
  MdError,
  MdInfo,
  MdLock,
  MdCode,
} from 'react-icons/md';
import { AiFillHeart, AiOutlineShoppingCart, AiFillEdit, AiFillDelete } from 'react-icons/ai';

const IconGallery = () => {
  const [copySuccess, setCopySuccess] = useState("");

  // Array of icons with their JSX code and names
  const icons = [
    { component: <FaReact />, name: "FaReact", code: "<FaReact />" },
    { component: <FaCoffee />, name: "FaCoffee", code: "<FaCoffee />" },
    { component: <FaApple />, name: "FaApple", code: "<FaApple />" },
    { component: <FaAndroid />, name: "FaAndroid", code: "<FaAndroid />" },
    { component: <FaCar />, name: "FaCar", code: "<FaCar />" },
    { component: <FaCloud />, name: "FaCloud", code: "<FaCloud />" },
    { component: <FaSun />, name: "FaSun", code: "<FaSun />" },
    { component: <FaMoon />, name: "FaMoon", code: "<FaMoon />" },
    { component: <FaStar />, name: "FaStar", code: "<FaStar />" },
    { component: <FaTree />, name: "FaTree", code: "<FaTree />" },
    { component: <MdHome />, name: "MdHome", code: "<MdHome />" },
    { component: <MdSearch />, name: "MdSearch", code: "<MdSearch />" },
    { component: <MdSettings />, name: "MdSettings", code: "<MdSettings />" },
    { component: <MdFavorite />, name: "MdFavorite", code: "<MdFavorite />" },
    { component: <MdMenu />, name: "MdMenu", code: "<MdMenu />" },
    { component: <MdCheck />, name: "MdCheck", code: "<MdCheck />" },
    { component: <MdError />, name: "MdError", code: "<MdError />" },
    { component: <MdInfo />, name: "MdInfo", code: "<MdInfo />" },
    { component: <MdLock />, name: "MdLock", code: "<MdLock />" },
    { component: <MdCode />, name: "MdCode", code: "<MdCode />" },
    { component: <AiFillHeart />, name: "AiFillHeart", code: "<AiFillHeart />" },
    { component: <AiOutlineShoppingCart />, name: "AiOutlineShoppingCart", code: "<AiOutlineShoppingCart />" },
    { component: <AiFillEdit />, name: "AiFillEdit", code: "<AiFillEdit />" },
    { component: <AiFillDelete />, name: "AiFillDelete", code: "<AiFillDelete />" },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(code);
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Icon Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg  shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mx-auto text-center mb-2">{icon.component}</div>
            <p className="text-center text-gray-600 font-medium">{icon.name}</p>
            <button
              onClick={() => handleCopy(icon.code)}
              className="mt-2 px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 w-full"
            >
              Copy Code
            </button>
            {copySuccess === icon.code && (
              <p className="text-green-500 text-center text-xs mt-2">
                Copied!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGallery;
