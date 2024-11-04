import { useForm } from "react-hook-form";
import Input from "./input";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="space-y-5">
        <div>
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            autoComplete="on"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be valid.",
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        <div>
          <Input
            label="Password: "
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <button className="animated-button w-full relative inline-flex items-center justify-center px-6 py-2 border-2 bg-transparent rounded-md overflow-hidden">
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;