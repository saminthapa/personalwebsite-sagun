import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex flex-col items-center py-1">
      <p className="text-center text-lg font-medium mt-4">
        &copy; 2025 <span className="text-yellow-300">Sagun Gautam</span> All rights reserved.
      </p>
      <span className="text-center">
        Developed by_
        <a
          href="https://www.saminthapa.com.np/"
          className="text-yellow-300 hover:text-white transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Samin Thapa
        </a>
      </span>
    </div>
  );
};

export default Footer;
