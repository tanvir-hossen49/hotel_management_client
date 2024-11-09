import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Page/Home/Home";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for theme preference; if not found, use system preference
    const savedPreference = localStorage.getItem("isDarkMode");
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const body = document.body;
    console.log("hi");

    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
  
      <div>
        <Home></Home>
      </div>
      

  );
}

export default App;
