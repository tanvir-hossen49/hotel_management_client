const Button = ({
  children,
  type = "button",
  bgColor = "bg-[#43b45e]",
  textColor = "text-white",
  ariaLabel,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      aria-label={ariaLabel}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
