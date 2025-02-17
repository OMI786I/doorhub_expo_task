import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { ReactNode } from "react";

const defaultThemeContext = {
  isDark: false,
  toggleTheme: () => {}, // Default empty function
};
export const ThemeContext = createContext(defaultThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (systemColorScheme === "dark") {
      setIsDark(true);
    } else setIsDark(false);
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
