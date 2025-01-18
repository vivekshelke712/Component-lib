import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com",
      bg: "bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://www.twitter.com",
      bg: "bg-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com",
      bg: "bg-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com",
      bg: "bg-blue-700",
    },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${link.bg}`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
