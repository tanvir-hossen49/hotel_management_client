import { Link } from "react-router-dom";

const AuthWrapper = ({ heading, subHeading, link, children }) => {
  return (
    <div className="flex justify-center items-center container my-10">
      <div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          {heading}
        </h2>
        <p className="mt-2 text-center text-base">
          {subHeading}&nbsp;
          <Link
            to={link}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            {link === "/signup" ? "Sign Up" : "Log In"}
          </Link>
        </p>
        {children}
      </div>
    </div>
  );
};
export default AuthWrapper;
