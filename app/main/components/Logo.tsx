"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <>
      <div className="flex items-center justify-center my-5 mx-10">
        <MotionLink
          href="/"
          className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-sm font-bold"
          whileHover={{
            backgroundColor: [
              "#121212",
              "#2e0914",
              "#1f3e2f",
              "#1f1fff",
              "#121212",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Songs
        </MotionLink>
      </div>
    </>
  );
}

export default Logo;
