import React, { useEffect, useState } from "react";
import lightbutton from "../../assets/website/lightbutton.png";
import darkbutton from "../../assets/website/darkbutton.png";

const DarkMode = () => {
  // Initialize theme from localStorage, default to 'light' if not set
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Effect to handle theme changes
  useEffect(() => {
    // Update localStorage
    localStorage.setItem("theme", theme);
    
    // Update document element classes
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      <img
        src={lightbutton}
        alt="Light Mode"
        className={`cursor-pointer absolute right-0 z-10 w-30 h-[1.9rem] ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
        onClick={toggleTheme}
      />
      <img
        src={darkbutton}
        alt="Dark Mode"
        className={`cursor-pointer w-30 h-[1.9rem] ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default DarkMode;