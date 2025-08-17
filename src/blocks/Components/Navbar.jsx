import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-center">
        <nav className="fixed top-10 w-[75%] flex justify-between items-center px-6 py-4 border border-gray-700 rounded-full bg-black/40 backdrop-blur-lg z-50">
          <div className="flex items-center gap-2">
            {/* <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-600 to-purple-500"></div> */}
            <img
              src="/images/layers.png"
              alt="DevFolio Logo"
              className="w-6 h-6"
            />
            <Link to="/" className="hover:text-white">
              <span className="text-lg font-semibold text-white">DevFolio</span>
            </Link>
          </div>
          <div className="flex items-center gap-6 text-gray-300 font-medium">
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
