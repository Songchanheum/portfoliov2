"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import { motion } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative group/menu">
      <div className="w-full px-32 py-3 font-medium items-center justify-between bg-white opacity-90 group-hover/menu:bg-slate-100 transition-colors ease duration-500">
        <nav>
          <CustomLink href="/main" title="Home" className="mx-12"></CustomLink>
          <CustomLink
            title="Introduce"
            className="mx-12"
            child={[
              { name: "introduce", href: "/main/introduce" },
              { name: "career", href: "/main/introduce/career" },
            ]}
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
    </div>
  );
}

export default NavBar;
