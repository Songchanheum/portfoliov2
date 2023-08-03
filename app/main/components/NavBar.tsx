"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import SocialAccount from "@/common/SocialAccount";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineRise,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "./Logo";

export const NavBar = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="relative group/menu flex justify-center z-[99]">
      <div className="max-w-[300px] rounded-b-full md:max-w-full md:rounded-none w-full px-6 md:px-12 lg:px-24 xl:px-32 py-3 font-medium items-center justify-between bg-white dark:bg-black opacity-90 group-hover/menu:bg-slate-100 dark:group-hover/menu:bg-slate-700 transition-colors ease duration-500">
        <nav className="justify-between flex md:block mx-10 md:mx-0">
          <CustomLink
            href="/main"
            title="Home"
            icon={<AiOutlineHome size={22} />}
            className="mx-3 lg:mx-12"
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            title="About Me"
            className="mx-3 lg:mx-12"
            href="/main/introduce"
            icon={<AiOutlineUser size={22} />}
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            title="Career Experience"
            className="mx-3 lg:mx-12"
            href="/main/introduce/career"
            icon={<AiOutlineRise size={22} />}
            open={open}
            setOpen={setOpen}
          ></CustomLink>
          <CustomLink
            href="/main/projects"
            title="Projects"
            className="mx-3 lg:mx-12"
            icon={<AiOutlineFundProjectionScreen size={22} />}
            open={open}
            setOpen={setOpen}
          ></CustomLink>
        </nav>
      </div>
    </div>
  );
};
export const TopNavBar = () => {
  return (
    <div className="flex justify-end md:justify-start dark:bg-slate-950 bg-white z-[90]">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="h-12 mt-10 md:my-0 me-4">
        <SocialAccount type="h" />
      </div>
    </div>
  );
};
