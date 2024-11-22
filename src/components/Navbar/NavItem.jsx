import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import NavLinks from "./NavLinks";
import CurrencySelector from "./CurrencySelector";
// import ToggleTheme from "../ToggleTheme";

const NavItem = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div className="flex justify-between items-center container">
        {/* Branding or Logo */}
        <div className="text-lg font-semibold">Hotel Al Farah</div>

        {/* Desktop Navigation */}
        <NavLinks className="ml-auto md:mr-5 hidden md:flex items-center justify-center md:space-x-4 lg:space-x-8 " />

        {/* Currency Selector, Sign Up Button, and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <CurrencySelector />
          <NavLink to="/signup">
            <Button
              className="bg-[#43b45e] text-white p-2 rounded"
              ariaLabel="Sign up for an account"
            >
              Sign Up
            </Button>
          </NavLink>
          {/* <ToggleTheme /> */}
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden border-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ariaLabel={isMenuOpen ? "Close" : "Open"}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white py-3 md:hidden mt-4 space-y-4 text-center">
          <NavLinks onClick={() => setIsMenuOpen(false)} />
          <CurrencySelector />

          <NavLink to="/signup">
            <Button
              className="bg-[#43b45e] text-white p-2 mt-2 rounded"
              ariaLabel="Sign up for an account"
            >
              Sign Up
            </Button>
          </NavLink>

          {/* <div className="flex justify-center mt-2">
            <ToggleTheme />
          </div> */}
        </div>
      )}
    </>
  );
};

export default NavItem;
