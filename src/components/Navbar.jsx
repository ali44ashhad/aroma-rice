import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50 border-solid border-b-[#f4f3f0] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Gold Aroma Rice Logo" className="h-10" />
            <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em]">
              Gold Aroma Rice
            </h2>
          </a>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#181611] focus:outline-none ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#products"
            className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
          >
            Products
          </a>
          <a
            href="#recipes"
            className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
          >
            Recipes
          </a>
          <a
            href="#about"
            className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <label className="relative w-48 md:w-64">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#898061]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full rounded-xl bg-[#f4f3f0] text-[#181611] placeholder:text-[#898061] text-sm outline-none"
            />
          </label>

          {/* Cart Button */}
          <button className="h-10 px-4 bg-[#e7b512] rounded-full text-[#181611] text-sm font-bold hover:bg-[#d4a411] transition-colors">
            Cart
          </button>

          {/* User Button */}
          <button className="h-10 px-3 flex items-center gap-2 bg-[#f4f3f0] rounded-full text-[#181611] text-sm font-bold hover:bg-[#e5e4e0] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-4">
            <a
              href="#products"
              className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
            >
              Products
            </a>
            <a
              href="#recipes"
              className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
            >
              Recipes
            </a>
            <a
              href="#about"
              className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
            >
              About Us
            </a>
            {/* Search & Buttons in mobile */}
            <label className="relative w-full mt-4">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#898061]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full rounded-xl bg-[#f4f3f0] text-[#181611] placeholder:text-[#898061] text-sm outline-none"
              />
            </label>

            <div className="flex flex-col gap-3 mt-4">
              <button className="h-10 px-4 bg-[#e7b512] rounded-full text-[#181611] text-sm font-bold hover:bg-[#d4a411] transition-colors">
                Cart
              </button>
              <button className="h-10 px-3 flex items-center justify-center gap-2 bg-[#f4f3f0] rounded-full text-[#181611] text-sm font-bold hover:bg-[#e5e4e0] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
                Account
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
