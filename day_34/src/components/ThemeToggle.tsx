import React, { useContext } from "react";
import { toggleTheme } from "../store/slices/ThemeSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import ThemeContext, { ThemeContextType } from "./ThemeContext";

const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div className="button" onClick={() => dispatch(toggleTheme())}>
      {theme ? "Light Theme" : "Dark Theme"}
    </div>
  );
};

export default ThemeToggle;
