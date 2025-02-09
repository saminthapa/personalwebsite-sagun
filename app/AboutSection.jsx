"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-6 md:px-12 py-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent font-serif italic tracking-wider mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-200">
            Hi, I'm{" "}
            <strong className="text-3xl text-yellow-300 font-semibold">
              Sagun Gautam
            </strong>
            ! A 22-year-old BBA-BI student at Pokhara University. Passionate
            about business and finance, I enjoy analyzing data, making strategic
            decisions, and solving real-world challenges.
          </p>

          {/* Social Links - Responsive Fix */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-8">
            <Link
              href="https://www.facebook.com/sagun.gautam.735"
              className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              <FaFacebook size={24} />{" "}
              <span className="text-lg font-medium">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/sagun_gautam_/"
              className="flex items-center space-x-2 bg-pink-500 px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram size={24} />{" "}
              <span className="text-lg font-medium">Instagram</span>
            </Link>
            <Link
              href="/resume.PNG"
              download
              className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              <FaDownload size={24} />{" "}
              <span className="text-lg font-medium">Resume</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
