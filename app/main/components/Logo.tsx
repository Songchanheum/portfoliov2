"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const MotionLink = motion(Link);

function Logo() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center my-5 mx-10">
      <MotionLink
        href="/"
        className="flex w-12 h-12 bg-black dark:bg-white text-white dark:text-violet-900 items-center justify-center rounded-full text-sm font-bold font-do"
        whileHover={{
          backgroundColor:
            theme === "light"
              ? ["#121212", "#2e0914", "#1f3e2f", "#1f1fff", "#121212"]
              : ["#f3f3f3", "#2e0914", "#ff23df", "#d32f3f", "#121212"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Songs
      </MotionLink>
    </div>
  );
}

export default Logo;
