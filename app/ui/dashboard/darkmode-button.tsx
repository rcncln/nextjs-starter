"use client";

import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode(e: React.MouseEvent | MouseEvent) {
    setIsDarkMode(!isDarkMode);
    e.preventDefault();
    const datatheme = document.documentElement.getAttribute("data-theme");

    if (datatheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(!isDarkMode);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDarkMode(!isDarkMode);
    }
  }

  return (
    <div onClick={handleDarkMode} className="hidden md:block">
      {isDarkMode ? (
        <Button>
          <SunIcon className="w-6" />
        </Button>
      ) : (
        <Button>
          <MoonIcon className="w-6" />
        </Button>
      )}
    </div>
  );
}
