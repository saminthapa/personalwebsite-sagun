import React from 'react';

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-6 z-30 mx-auto w-[90%] max-w-screen-lg border border-gray-100 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 py-3 shadow-lg backdrop-blur-lg rounded-3xl">
      <div className="px-4">
        <div className="flex items-center justify-center">
          <a className="text-2xl font-bold text-white hover:text-yellow-300 transition duration-300" href="/">
            Sagun
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
