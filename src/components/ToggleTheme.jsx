import React, { useEffect, useState } from "react";
import ToggleButton from "./Button/ToggleButton";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for theme preference;
    // if not found, use system preference
    const savedPreference = localStorage.getItem("isDarkMode");
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <ToggleButton setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />;
};

export default ToggleTheme;
