const AnimatedButton = ({
  type = "submit",
  disabled = false,
  className,
  ariaLabel,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      className={`animated-button relative inline-flex items-center justify-center px-6 py-2 border-2 bg-transparent rounded-md overflow-hidden w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
