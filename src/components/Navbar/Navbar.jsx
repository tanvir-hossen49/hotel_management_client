import { useLocation } from "react-router-dom";
import StickyNav from "./StickyNav";
import FixedNav from "./FixedNav";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return <div> {pathname !== "/" ? <FixedNav /> : <StickyNav />} </div>;
};

export default Navbar;
