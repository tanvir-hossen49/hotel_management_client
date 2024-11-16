import React, { useState, useId } from "react";
import Icon from "./Icon/Icon";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    autoComplete = "off",
    required = true,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="w-full relative">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        type={showPassword ? "text" : type} // Toggle between "text" and "password"
        className={`px-3 py-2 rounded-lg outline-none focus:border-[#3B9DF8] transition-colors duration-300 border bg-transparent w-full ${className}`}
        ref={ref}
        autoComplete={autoComplete}
        {...props}
        id={id}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 bottom-3 text-sm focus:outline-none"
        >
          {showPassword ? <Icon name="show" /> : <Icon name="hide" />}
        </button>
      )}
    </div>
  );
});

export default Input;
