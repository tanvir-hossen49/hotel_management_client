import SignupComponent from "../../components/Signup";
import AuthWrapper from "../../components/AuthWrapper";

const Signup = () => {
  return (
    <AuthWrapper
      heading="Sign up to create account"
      subHeading="Already have an account?"
      link="/login"
    >
      <SignupComponent />
    </AuthWrapper>
  );
};

export default Signup;
