import {createContext, ReactElement, useEffect, useState} from "react";
import {Theme} from "../models/Theme.ts";

type ThemeContextProviderProps = {
  children: ReactElement | ReactElement[];
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme") as Theme ?? "light");
  const oppositeTheme: Theme = (theme === "light" ? "dark" : "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(oppositeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, oppositeTheme]);

  const toggleTheme = () => setTheme(oppositeTheme);

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      toggleTheme: toggleTheme,
      setTheme: setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};