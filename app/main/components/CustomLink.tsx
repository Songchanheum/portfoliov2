"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
interface LinkType {
  name: string;
  href: string;
}
const CustomLink = ({
  href,
  title,
  icon,
  className,
  child,
  open,
  setOpen,
}: {
  href?: string;
  title: string;
  className?: string;
  icon?: React.ReactNode;
  child?: Array<LinkType>;
  open: string | null;
  setOpen: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const path = usePathname();
  let openTab = open === title ? true : false;
  useEffect(() => {
    openTab = open === title ? true : false;
  }, [open]);
  if (href) {
    const currPath = path === href;
    return (
      <Link
        href={href}
        className={`${className} relative group/link text-sm md:text-lg lg:text-xl inline-block`}
        onClick={() => setOpen(title)}
      >
        <div className="flex">
          {icon}
          <span className="hidden md:block font-do">&nbsp;{title}</span>
        </div>

        <span
          className={`
        h-[2px] inline-block bg-black dark:bg-white absolute 
        left-0 -bottom-0.5 group-hover/link:w-full 
        transition-[width] ease duration-200
        ${currPath ? " w-full" : " w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    );
  } else {
    const currPath = child?.find((e) => e.href === path);
    return (
      <button
        className={`${className} relative group/link`}
        onClick={() => setOpen(openTab ? null : title)}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover/link:w-full transition-[width] ease duration-200 ${
            currPath ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
        {openTab ? (
          <div className="absolute top-10 left-[-12px] bg-white p-3 rounded-b-lg">
            {child?.map((e, i) => {
              console.log(e);
              return (
                <Link
                  key={i}
                  href={e.href}
                  className={`me-4 relativerounded-2xl ${
                    e.href === path ? "font-bold" : ""
                  }`}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </button>
    );
  }
};

export default CustomLink;
