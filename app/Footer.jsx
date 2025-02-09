import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex flex-col items-center py-1">
        <p className="text-center text-lg font-medium mt-4"> {/* Reduced space */}
          &copy; 2025 <span className="text-yellow-300">Sagun Gautam</span> All rights reserved.
        </p>
    </div>
  );
};

export default Footer;
