import LoginComponent from "../../components/Login";
import AuthWrapper from "../../components/AuthWrapper";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  return (
    <AuthWrapper
      heading="Sign in to your account"
      subHeading="Don't have an account?"
      link="/signup"
    >
      <LoginComponent />
    </AuthWrapper>
  );
};

export default Login;
