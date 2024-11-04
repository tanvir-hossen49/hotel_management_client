import React, { useState, useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", autoComplete = "off", ...props },
  ref
) {
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const id = useId();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className="w-full relative">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label} <span className="text-red-500">*</span>
        </label>
      )}

      <input
        type={showPassword ? "text" : type} // Toggle between "text" and "password"
        className={`px-3 py-2 rounded-lg outline-none focus:border-[#3B9DF8] transition-colors duration-300 border dark.text-black bg-transparent w-full ${className}`}
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
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
});

export default Input;
