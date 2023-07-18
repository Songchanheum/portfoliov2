import Link from "next/link";
import { usePathname } from "next/navigation";
import { relative } from "path";
import React from "react";

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const path = usePathname();
  const currPath = path.split("/")[2] === href.split("/")[2];
  return (
    <Link href={href} className={`${className} relative group/link`}>
      {title}
      <span
        className={`
        h-[2px] inline-block bg-black absolute 
        left-0 -bottom-0.5 group-hover/link:w-full 
        transition-[width] ease duration-300
        ${currPath ? " w-full" : " w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
