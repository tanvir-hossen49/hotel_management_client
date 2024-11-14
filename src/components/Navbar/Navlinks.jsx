import { NavLink } from "react-router-dom";

const NavLinks = ({ className, onClick }) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Features", path: "/features" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={className}>
      {navLinks.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "block font-semibold bg-[#43b45e] text-white p-2 transition duration-300"
              : "hover:bg-[#43b45e] hover:text-white transition duration-300 block p-2"
          }
          onClick={onClick}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
