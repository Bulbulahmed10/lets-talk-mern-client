import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { DarkThemeContext } from "../../context/DarkThemeProvider";
const DarkLightToggleButton = () => {
  const [darkMode, setDarkMode] = useContext(DarkThemeContext);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.removeItem("lets-talk-theme");
    } else {
      localStorage.setItem(
        "lets-talk-theme",
        JSON.stringify({ theme: "dark" })
      );
    }
    
    // You can add logic here to toggle your app's theme
    // e.g., by adding/removing a CSS class to the root element
  };

  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
      onClick={toggleTheme}>
      {darkMode ? (
        <FiSun className="text-yellow-400 text-xl" />
      ) : (
        <FiMoon className="text-gray-400 text-xl" />
      )}
    </button>
  );
};

export default DarkLightToggleButton;
