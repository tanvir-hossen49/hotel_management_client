import { useEffect, useState } from "react";
import NavItem from "./NavItem";

const StickyNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isSticky ? "shadow-md bg-white" : "bg-transparent"
      } py-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50`}
    >
      <NavItem isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default StickyNav;
