import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#8CC63F] hover:text-green-700 transition">
          ShopEase
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-[#8CC63F]">
          <a href="#" className="hover:text-green-700 transition">Home</a>
          <a href="#" className="hover:text-green-700 transition">Shop</a>
          <a href="#" className="hover:text-green-700 transition">About</a>
          <a href="#" className="hover:text-green-700 transition">Contact</a>
        </nav>

        {/* Buttons / Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="px-4 py-2 border border-[#8CC63F] text-[#8CC63F] rounded hover:bg-[#8CC63F] hover:text-white transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#8CC63F] text-white rounded hover:bg-green-600 transition font-semibold">
            Sign Up
          </button>

          {/* Attractive Green Cart Icon */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#8CC63F] hover:text-green-700 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {/* Cart SVG Path */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2m0 0L7.68 13.39a2 2 0 001.93 1.61h9.78a2 2 0 001.92-1.61l1.54-7.61H5.4m0 0L4 5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 19a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>

            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8CC63F] text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2 text-[#8CC63F]">
          <a href="#" className="block py-2 hover:text-green-700 transition">Home</a>
          <a href="#" className="block py-2 hover:text-green-700 transition">Shop</a>
          <a href="#" className="block py-2 hover:text-green-700 transition">About</a>
          <a href="#" className="block py-2 hover:text-green-700 transition">Contact</a>

          <div className="flex flex-col space-y-2 mt-2">
            <button className="px-4 py-2 border border-[#8CC63F] text-[#8CC63F] rounded hover:bg-[#8CC63F] hover:text-white transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#8CC63F] text-white rounded hover:bg-green-600 transition font-semibold">
              Sign Up
            </button>

            <div className="relative cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#8CC63F] hover:text-green-700 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2m0 0L7.68 13.39a2 2 0 001.93 1.61h9.78a2 2 0 001.92-1.61l1.54-7.61H5.4m0 0L4 5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 19a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            
          </div>
        </nav>
      )}
    </header>
  );
}
