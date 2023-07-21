"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import SocialAccount from "./SocialAccount";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const NavBar = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="relative group/menu">
      <div className="w-full px-32 py-3 font-medium items-center justify-between bg-white opacity-90 group-hover/menu:bg-slate-100 transition-colors ease duration-500">
        <nav>
          <CustomLink
            href="/main"
            title="Home"
            className="mx-12"
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            title="Introduce"
            className="mx-12"
            child={[
              { name: "Introduce", href: "/main/introduce" },
              { name: "Career", href: "/main/introduce/career" },
            ]}
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            href="/main/projects"
            title="Projects"
            className="mx-12"
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            href="/main/about"
            title="About"
            className="mx-12"
            open={open}
            setOpen={setOpen}
          ></CustomLink>
        </nav>
      </div>
    </div>
  );
};
export const Logo = () => {
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
};

export const TopNavBar = () => {
  return (
    <div className="flex justify-start bg-white">
      <Logo />
      <div>
        <SocialAccount type="h" />
      </div>
    </div>
  );
};
