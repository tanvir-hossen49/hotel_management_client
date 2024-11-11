import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, ToggleTheme } from "../index";

const NavItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="container flex justify-between items-center">
        {/* Branding or Logo */}
        <div className="text-lg font-semibold">ADB.com</div>

        {/* Desktop Navigation */}
        <div className="ml-auto mr-5 hidden md:flex items-center justify-center space-x-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-[#43b45e] text-white p-2 transition duration-300"
                  : "hover:bg-[#43b45e] hover:text-white p-2 transition duration-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Currency Selector, Sign Up Button, and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="hover:bg-[#43b45e] hover:text-white p-2 transition duration-300  ">
            BDT
          </span>

          <NavLink to="/signup">
            <Button className="bg-[#43b45e] text-white p-2 rounded">
              Sign Up
            </Button>
          </NavLink>
          <ToggleTheme />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center animate-slide-down">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block hover:text-blue-600 transition duration-300"
              activeClassName="font-bold text-blue-600"
            >
              {link.name}
            </NavLink>
          ))}

          <span className="block transition duration-300">BDT</span>

          <NavLink to="/signup">
            <Button className="bg-[#43b45e] text-white p-2 rounded">
              Sign Up
            </Button>
          </NavLink>

          <div className="flex justify-center mt-2">
            <ToggleTheme />
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;
