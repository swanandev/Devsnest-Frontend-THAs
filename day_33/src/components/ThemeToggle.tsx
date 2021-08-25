import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <div className="button" onClick={() => setTheme(!theme)}>
      {theme ? "Light Theme" : "Dark Theme"}
    </div>
  );
};

export default ThemeToggle;
