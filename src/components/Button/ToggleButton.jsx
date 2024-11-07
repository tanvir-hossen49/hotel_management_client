const ToggleButton = ({ setIsDarkMode, isDarkMode }) => {
  const handleSwitchChange = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div
      className={`${
        isDarkMode ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
      } w-[65px] h-[34px] py-[0.138rem] px-[0.200rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
    >
      <div
        className={`${
          isDarkMode
            ? " translate-x-[28px] rotate-[90deg]"
            : "translate-x-[0px] rotate-[0deg]"
        } w-[26px] h-[27px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
        style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
        onClick={handleSwitchChange}
      ></div>
    </div>
  );
};

export default ToggleButton;
