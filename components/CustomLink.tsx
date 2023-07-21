"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface LinkType {
  name: string;
  href: string;
}
const CustomLink = ({
  href,
  title,
  className,
  child,
  open,
  setOpen,
}: {
  href?: string;
  title: string;
  className?: string;
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
    const currPath = path.split("/")[2] === href?.split("/")[2];
    return (
      <Link
        href={href}
        className={`${className} relative group/link`}
        onClick={() => setOpen(title)}
      >
        {title}
        <span
          className={`
        h-[2px] inline-block bg-black absolute 
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
