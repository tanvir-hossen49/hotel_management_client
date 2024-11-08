import { useLocation } from "react-router-dom";
import StickyNav from "./StickyNav";
import NavItem from "./NavItem";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {pathname !== "/" ? (
        <nav className="py-4">
          <NavItem />
        </nav>
      ) : (
        <StickyNav />
      )}
    </>
  );
};

export default Navbar;
