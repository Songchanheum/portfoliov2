"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
    if (!theme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  });
  if (!mounted) {
    return null;
  }
  return (
    <div className="w-16 rounded-full border-2 dark:border-gray-200 border-gray-800 flex justify-between p-2">
      <button onClick={() => setTheme("light")}>
        <FaSun size={16} />
      </button>
      <button onClick={() => setTheme("dark")}>
        <FaRegMoon size={16} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
