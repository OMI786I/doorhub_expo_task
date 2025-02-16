import React, { createContext, useState } from "react";

const defaultThemeContext = {
  isDark: false,
  toggleTheme: () => {}, // Default empty function
};
export const ThemeContext = createContext(defaultThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
