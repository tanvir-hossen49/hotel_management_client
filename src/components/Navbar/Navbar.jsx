import { useState } from "react";
import { useLocation } from "react-router-dom";
import StickyNav from "./StickyNav";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {pathname !== "/" ? (
        <nav className="py-4">
          <NavItem isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </nav>
      ) : (
        <StickyNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
};

export default Navbar;
