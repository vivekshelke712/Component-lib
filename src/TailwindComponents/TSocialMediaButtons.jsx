import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from 'react-icons/fa';

const TSocialMediaButtons = () => {
  const socialMediaLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaYoutube />, url: 'https://youtube.com', name: 'YouTube' },
    { icon: <FaGithub />, url: 'https://github.com', name: 'GitHub' },
  ];

  return (
    <div className="flex space-x-4">
      {socialMediaLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-gray-500 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default TSocialMediaButtons;
