'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 p-6 md:p-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-xl transform transition duration-300 hover:scale-105">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-5xl md:text-6xl font-bold text-right leading-tight mt-8 md:mt-0 tracking-wide font-serif mb-8 md:mb-12">About Me</h2>
        <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-200">
            Hi, I'm <strong className="text-3xl text-yellow-300">Sagun Gautam</strong>! A 22-year-old BBA-BI student at Pokhara University. Passionate about business and finance, I enjoy analyzing data, making strategic decisions, and solving real-world challenges.
          </p>
          <div className="flex justify-center md:justify-start space-x-8 mt-8">
            <Link
              href="https://www.facebook.com/sagun.gautam.735"
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition duration-300 text-lg md:text-xl font-medium"
            >
              <FaFacebook size={32} /> <span className="text-lg md:text-xl">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/sagun_gautam_/"
              className="flex items-center space-x-2 text-white hover:text-pink-400 transition duration-300 text-lg md:text-xl font-medium"
            >
              <FaInstagram size={32} /> <span className="text-lg md:text-xl">Instagram</span>
            </Link>
            <Link
              href="/resume.PNG"
              download
              className="flex items-center space-x-2 text-white hover:text-green-400 transition duration-300 text-lg md:text-xl font-medium"
            >
              <FaDownload size={28} /> <span className="text-lg md:text-xl">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
