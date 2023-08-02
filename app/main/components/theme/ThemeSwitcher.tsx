"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaSun, FaRegMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) {
    return null;
  }
  return (
    <>
      <button className="dark:block hidden" onClick={() => setTheme("light")}>
        <FaSun size={25} />
      </button>
      <button className="dark:hidden block" onClick={() => setTheme("dark")}>
        <FaRegMoon size={25} />
      </button>
    </>
  );
};

export default ThemeSwitcher;
