import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-50 border-b-[#f4f3f0] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Gold Aroma Rice Logo" className="h-10" />
          <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em]">
            Gold Aroma Rice
          </h2>
        </a>

        {/* Hamburger (Mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#181611] focus:outline-none"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {["Products", "Recipes", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <label className="relative w-48 md:w-64">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#898061]">
              🔍
            </div>
            <input
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-full rounded-xl bg-[#f4f3f0] text-[#181611] placeholder:text-[#898061] text-sm outline-none"
            />
          </label>

          <button className="h-10 px-4 bg-[#e7b512] rounded-full text-[#181611] text-sm font-bold hover:bg-[#d4a411] transition-colors">
            Cart
          </button>

          <button className="h-10 px-3 flex items-center gap-2 bg-[#f4f3f0] rounded-full text-[#181611] text-sm font-bold hover:bg-[#e5e4e0] transition-colors">
            👤 Account
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 border-t border-[#f4f3f0]">
          <nav className="flex flex-col gap-4 pt-4">
            {["Products", "Recipes", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-[#181611] text-sm font-medium hover:text-[#e7b512] transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Mobile Search */}
            <label className="relative w-full mt-4">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#898061]">
                🔍
              </div>
              <input
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full rounded-xl bg-[#f4f3f0] text-[#181611] placeholder:text-[#898061] text-sm outline-none"
              />
            </label>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="h-10 px-4 bg-[#e7b512] rounded-full text-[#181611] text-sm font-bold hover:bg-[#d4a411] transition-colors">
                Cart
              </button>
              <button className="h-10 px-3 flex items-center justify-center gap-2 bg-[#f4f3f0] rounded-full text-[#181611] text-sm font-bold hover:bg-[#e5e4e0] transition-colors">
                👤 Account
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
