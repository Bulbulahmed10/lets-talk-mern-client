import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkThemeProvider";

const useDarkTheme = () => {
  const [, setDarkMode] = useContext(DarkThemeContext);
  let darkTheme = JSON.parse(localStorage.getItem("lets-talk-theme")) || false;
  if (darkTheme === false) {
    darkTheme = false;
    setDarkMode(false);
  } else {
    if (darkTheme?.theme === "dark") {
      darkTheme = true;
      setDarkMode(true);
    }
  }

  return { darkTheme };
};

export default useDarkTheme;
