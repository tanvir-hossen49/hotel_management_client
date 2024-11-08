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
    <div
      style={{
        backgroundImage: "url('/src/assets/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <nav
        className={`${
          isSticky
            ? "bg-white dark:bg-black shadow-md fixed top-0 left-0 right-0 z-50"
            : "bg-transparent text-black"
        } py-4 transition-all duration-300`}
      >
        <NavItem />
      </nav>
    </div>
  );
};

export default StickyNav;
