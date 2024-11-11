import { useEffect, useState } from "react";
import NavItem from "./NavItem";

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky
          ? "bg-white dark:bg-black shadow-md"
          : "bg-transparent text-black "
      } py-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50`}
    >
      <NavItem />
    </nav>
  );
};

export default StickyNav;
