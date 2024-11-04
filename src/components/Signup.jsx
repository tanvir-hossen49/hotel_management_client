import { useForm, useWatch } from "react-hook-form";
import Input from "./input";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  // Watch the password field
  const password = useWatch({ control, name: "password", defaultValue: "" });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="space-y-5">
        <div>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required.",
              maxLength: {
                value: 20,
                message: "Name cannot exceed 20 characters.",
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters.",
              },
            })}
          />
          {errors.name && <p className="error-msg">{errors.name.message}</p>}
        </div>

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
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must include uppercase, lowercase, and a number.",
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Input
            label="Confirm Password: "
            placeholder="Re-enter your password"
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password.",
              validate: value =>
                value === password || "Passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-msg">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button className="animated-button w-full relative inline-flex items-center justify-center px-6 py-2 border-2 bg-transparent rounded-md overflow-hidden">
          Register
        </button>
      </div>
    </form>
  );
};

export default Signup;
