import { useEffect, useState } from "react";

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
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vel
        distinctio doloremque quibusdam tempora, odit culpa, aut laborum animi
        numquam ex quaerat illo excepturi. A vero natus quam dolorem harum magni
        nostrum ducimus tempore esse, illum suscipit exercitationem eius,
        voluptates praesentium autem commodi unde voluptatum repellendus placeat
        dicta reiciendis. Consectetur quaerat sit vel consequatur voluptas unde,
        veritatis velit nobis nihil, eligendi placeat impedit vero explicabo
        sequi. Perferendis exercitationem a ab perspiciatis ipsum cumque. Porro
        dicta itaque corporis perspiciatis ad quibusdam laudantium perferendis
        mollitia explicabo quis consectetur commodi accusamus sequi voluptate
        similique est ea, quae esse atque ratione. Magnam, non aliquam!
      </p>
      <button onClick={toggleMode}>{isDarkMode ? "Light" : "Dark"}</button>
    </>
  );
}

export default App;
