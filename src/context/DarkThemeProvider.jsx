import { createContext, useState } from "react";

export const DarkThemeContext = createContext(null);
const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkThemeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeProvider;
