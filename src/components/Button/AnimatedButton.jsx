import "./Button.css";

const AnimatedButton = ({ buttonType, children }) => {
  return (
    <button
      className={`animated-button ${
        buttonType === "login" ? "w-full" : "w-full md:w-1/2"
      } relative inline-flex items-center justify-center px-6 py-2 border-2 bg-transparent rounded-md overflow-hidden`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
