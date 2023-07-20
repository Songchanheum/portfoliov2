"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
interface LinkType {
  name: string;
  href: string;
}
const CustomLink = ({
  href,
  title,
  className,
  child,
}: {
  href?: string;
  title: string;
  className?: string;
  child?: Array<LinkType>;
}) => {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  if (href) {
    const currPath = path.split("/")[2] === href?.split("/")[2];
    return (
      <Link href={href} className={`${className} relative group/link`}>
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
        onClick={() => setOpen(!open)}
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
        {open ? (
          <div className="absolute top-12 left-[-12px]">
            {child?.map((e, i) => {
              console.log(e);
              return (
                <Link
                  key={i}
                  href={e.href}
                  className={`me-4 relative bg-white rounded-2xl ${
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
