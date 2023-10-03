import React, { useContext } from "react";
import { ThemeContext } from "../../Context/theme"; // Import the ThemeContext
import "./theme.css";

function ThemeCompo() {
  const { contextTheme, setContextTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setContextTheme(contextTheme === "Dark" ? "Light" : "Dark");
  }; 


  document.body.className = `body ${contextTheme}`;

  return (
    <button className="btn btn-outline-primary" onClick={toggleTheme}>
      {contextTheme}
    </button>
  );
}

export default ThemeCompo;
