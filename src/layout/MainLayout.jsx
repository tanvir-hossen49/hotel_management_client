import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
