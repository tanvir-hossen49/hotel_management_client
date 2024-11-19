import LoginComponent from "../../components/Login";
import AuthWrapper from "../../components/AuthWrapper";

const Login = () => {
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
