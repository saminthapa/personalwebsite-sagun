import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-6 z-30 mx-auto w-[30%] max-w-screen-lg border border-gray-100 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500  shadow-lg backdrop-blur-lg rounded-3xl">
      <div className="px-4">
        <div className="flex items-center justify-center">
          
            <Image 
            src='/logo.png'
             alt='logo'
             width={70}
             height={20}/>

        
        </div>
      </div>
    </header>
  );
};

export default NavBar;
