const CounterButton = ({ className, children, ...props }) => {
  return (
    <button
      className={`bg-gray-100 p-2 rounded-r-md text-gray-700 text-[1.1rem] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CounterButton;
