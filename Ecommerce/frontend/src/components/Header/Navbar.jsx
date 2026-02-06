import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/logo (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <div className="w-full bg-[#007595] h-14 sm:h-16 flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Ecommerce Store
        </h1>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-50 shadow-md">
        <div className="flex items-center justify-between px-6 md:px-16 py-4">


          <NavLink to="/">
            <img src={logo} alt="logo" className="w-20 rounded-full" />
          </NavLink>


          <div className="hidden sm:flex gap-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007595] font-semibold border-b-2 border-[#007595]"
                  : "text-gray-700 hover:text-[#007595]"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007595] font-semibold border-b-2 border-[#007595]"
                  : "text-gray-700 hover:text-[#007595]"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#007595] font-semibold border-b-2 border-[#007595]"
                  : "text-gray-700 hover:text-[#007595]"
              }
            >
              Contact
            </NavLink>

            <button className="px-6 py-2 rounded-full bg-[#007595] text-white">
              Login
            </button>
          </div>


          <button
            className="sm:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>


        {open && (
          <div className="sm:hidden bg-white shadow px-6 py-4">
            <NavLink className="block py-2" to="/">Home</NavLink>
            <NavLink className="block py-2" to="/about">About</NavLink>
            <NavLink className="block py-2" to="/contact">Contact</NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
