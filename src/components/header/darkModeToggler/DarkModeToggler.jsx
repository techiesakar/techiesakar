import React, { useEffect, useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggler = () => {
  const moonIcon = <FiMoon />;
  const sunIcon = <FiSun />;
  const [mode, setMode] = useState("light");
  const storedMode = localStorage.getItem("mode");
  const body = document.body;
  if (storedMode === null) {
    localStorage.setItem("mode", "light");
  }
  useEffect(() => {
    setMode(storedMode);
  }, [storedMode]);

  body.classList.add(mode);

  const toggleMode = () => {
    if (storedMode === "light" || storedMode === null) {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
      body.classList.remove("light");
      body.classList.add("dark");
    } else if (storedMode === "dark") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("light");
      body.classList.remove("dark");
      body.classList.add("light");
    }

  };
  return (
    <>
      <div className={`mode-toggler rounded-full text-white ${mode==="light" ? "bg-gray-800":"bg-gray-600"}`} onClick={toggleMode}>
        {mode === "light" ? moonIcon : sunIcon}
        {/* <div className="loader"></div> */}
      </div>
    </>
  );
};

export default DarkModeToggler;
