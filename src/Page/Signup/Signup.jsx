import { Link } from "react-router-dom";
import SignupComponent from "../../components/Signup";

const Signup = () => {
  return (
    <div className="flex justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        <SignupComponent />
      </div>
    </div>
  );
};

export default Signup;
