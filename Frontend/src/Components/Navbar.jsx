import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="p-4 fixed top-0 left-0 w-full bg-gray-100 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Sai Baba Ashray Welfare Trust"
            className="w-12 rounded-full hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-800 font-semibold">
          <li className="cursor-pointer hover:text-amber-700 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition duration-300">
            <Link to="/mission">Mission</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition duration-300">
            <Link to="/donations">Donations</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/signin">
            <button className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition">
              Sign In
            </button>
          </Link>
          <Link to="/donate">
            <button className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
