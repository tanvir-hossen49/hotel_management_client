import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import ToggleTheme from "../ToggleTheme";
import Icon from "../Icon/Icon";

const NavItem = ({ isMenuOpen, setIsMenuOpen }) => {
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
        <div className="text-lg font-semibold">Hotel Al Farah</div>

        {/* Desktop Navigation */}
        <div className="ml-auto md:mr-5 hidden md:flex items-center justify-center md:space-x-4 lg:space-x-8 ">
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
          {/* <ToggleTheme /> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? (
            <div className="border p-1 rounded-full">
              <Icon name="close" strokeWidth="2" />
            </div>
          ) : (
            <Icon name="menu" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="bg-white py-3 md:hidden mt-4 space-y-4 text-center animate-slide-down"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "block font-semibold bg-[#43b45e] text-white p-2 transition duration-300"
                  : "hover:bg-[#43b45e] hover:text-white transition duration-300 block"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <span className="block transition duration-300">BDT</span>

          <NavLink to="/signup">
            <Button className="bg-[#43b45e] text-white p-2 mt-2 rounded">
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
