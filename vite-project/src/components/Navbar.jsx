import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets_frontend/logo.svg";
import Profilepic from "../assets_frontend/profile_pic.png";
import dropdown from "../assets_frontend/dropdown_icon.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [showmenu, setShowmenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <img
        src={logo}
        alt="/"
        className="w-36 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Hamburger Menu for Mobile */}
      <div className="block md:hidden">
        <button
          onClick={() => setShowmenu(!showmenu)}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          showmenu ? "block" : "hidden"
        } md:flex md:items-center gap-5 font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:z-auto shadow-md md:shadow-none p-4 md:p-0`}
      >
        <NavLink to="/" className="block md:inline">
          <li className="m-auto hover:text-primary">Home</li>
        </NavLink>
        <NavLink to="/doctors" className="block md:inline">
          <li className="m-auto hover:text-primary">All Doctors</li>
        </NavLink>
        <NavLink to="/about" className="block md:inline">
          <li className="m-auto hover:text-primary">About</li>
        </NavLink>
        <NavLink to="/contact" className="block md:inline">
          <li className="m-auto hover:text-primary">Contact</li>
        </NavLink>
      </ul>

      {/* User Profile or Login Button */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={Profilepic} alt="profile" />
            <img src={dropdown} className="w-2.5" alt="dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col p-4 gap-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
          onClick={() => navigate("/login")}
           className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 sm:rounded-full text-sm sm:text-base font-light sm:block sm:rounded-full"
        >
          Create Account
        </button>
        
        )}
      </div>
    </div>
  );
}
