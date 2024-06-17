import Link from "next/link";
import React from "react";
import { Github, Gmail, Instagram, Me, Programmers } from "./utils/Icons";

const SelectIcon = ({ name, type }: { name: string; type: boolean }) => {
  switch (name) {
    case "github":
      return <Github size={type ? "48" : "26"} />;
    case "instagram":
      return <Instagram size={type ? "32" : "12"} />;
    case "gmail":
      return <Gmail size={type ? "48" : "26"} />;
    case "programmers":
      return <Programmers size={type ? "48" : "26"} />;
    case "blog":
      return <Me size={type ? "48" : "26"} />;
    default:
      return <div className="w-full h-full bg-gray-200 rounded-2xl"></div>;
  }
};
const SocialAccount = ({ type }: { type: string }) => {
  const social = [
    { name: "github", href: "https://github.com/Songchanheum" },
    {
      name: "instagram",
      href: "https://www.instagram.com/songch_/",
    },
    {
      name: "programmers",
      href: "https://career.programmers.co.kr/pr/softsch1_9949",
    },
    { name: "blog", href: "https://songsblog.vercel.app/" },
    {
      name: "gmail",
      href: "mailto:bsk9212@gmail.com?subject=Portfolio 문의 사항",
    },
  ];
  const mainClass =
    type === "v"
      ? "mt-16 mx-4 "
      : "flex justify-center md:mt-8 animate-none md:animate-bounce hover:animate-none group";
  return (
    <div className={mainClass}>
      {social.map((item, i) => {
        if (type === "v") {
          return (
            <Link
              className="w-full h-16 justify-between items-center text-center flex border-2 border-slate-400 bg-white dark:bg-slate-800 rounded-2xl mt-2 p-2"
              href={item.href}
              key={item.name + i}
              target="_blank"
            >
              <div className="w-[20%]">
                <div className="w-12 h-12 me-5">
                  <SelectIcon name={item.name} type={type === "v"} />
                </div>
              </div>
              <span className="w-[70%] float-left relative inline-block font-jua uppercase lg:text-xl text-sm">
                {item.name}
              </span>
              <span className="w-[10%] float-right relative inline-block text-gray-700 dark:text-gray-200 font-jua uppercase lg:text-xl text-base">
                {">>"}
              </span>
            </Link>
          );
        } else {
          return (
            <Link
              className="w-full me-4 md:-me-4 md:group-hover:me-4 xl:transition-all xl:ease-in xl:duration-200"
              href={item.href}
              key={item.name + i}
              target="_blank"
            >
              <SelectIcon name={item.name} type={type === "v"} />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SocialAccount;
