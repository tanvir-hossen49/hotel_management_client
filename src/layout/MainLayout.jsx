import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

// TODO: CHECK USER IS LOGGED IN OR NOT

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
