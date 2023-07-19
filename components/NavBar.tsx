"use client";
import React from "react";
import CustomLink from "./CustomLink";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <div className="relative group/menu">
      <div className="w-full px-32 py-3 font-medium items-center justify-between bg-white opacity-90 group-hover/menu:bg-slate-100 transition-colors ease duration-500">
        <nav>
          <CustomLink href="/main" title="Home" className="mx-12"></CustomLink>
          <CustomLink
            href="/main/introduce"
            title="Introduce"
            className="mx-12"
          ></CustomLink>
          <CustomLink
            href="/main/projects"
            title="Projects"
            className="mx-12"
          ></CustomLink>
          <CustomLink
            href="/main/about"
            title="About"
            className="mx-12"
          ></CustomLink>
        </nav>
      </div>
      <div className="w-full z-50 inline-block absolute left-0 top-[48px] h-0 bg-slate-100 opacity-90 group-hover/menu:h-[200px] transition-[height] ease-in duration-300"></div>
    </div>
  );
}

export default NavBar;
