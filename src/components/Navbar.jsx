import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a className="flex items-center" href="">
            <img src={logo} alt="Gold Aroma Rice Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-amber-700">
              Gold Aroma Rice
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-amber-600">
              Home
            </a>
            <a href="#products" className="text-gray-800 hover:text-amber-600">
              Our Rice
            </a>
            <a href="#process" className="text-gray-800 hover:text-amber-600">
              Our Process
            </a>
            <a href="#wholesale" className="text-gray-800 hover:text-amber-600">
              Wholesale
            </a>
            <a href="#contact" className="text-gray-800 hover:text-amber-600">
              Contact
            </a>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
