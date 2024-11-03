import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Input from "./input";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
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
              {errors.name && (
                <p className="error-msg">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}
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

            <div>
              <Input
                label="Confirm Password: "
                placeholder="Re-enter your password"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  minLength: {
                    value: 6,
                    message:
                      "Confirm password must be at least 6 characters long.",
                  },
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
      </div>
    </div>
  );
};

export default SignUp;
