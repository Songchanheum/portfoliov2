import Link from "next/link";
import React from "react";
import { Github, Gmail, Instagram, Me, Programmers } from "./utils/Icons";

const SelectIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "github":
      return <Github size="48" />;
    case "instagram":
      return <Instagram size="32" />;
    case "gmail":
      return <Gmail size="48" />;
    case "programmers":
      return <Programmers size="48" />;
    case "blog":
      return <Me size="48" />;
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
  const mainClass = type === "v" ? "mt-16 mx-4 " : "flex";
  return (
    <div className={mainClass}>
      {social.map((item, i) => {
        return (
          <Link
            className="w-full h-16 justify-between items-center text-center flex border-2 border-slate-400 bg-white rounded-2xl mt-2 p-2"
            href={item.href}
            key={item.name + i}
            target="_blank"
          >
            <div className="w-[20%]">
              <div className="w-12 h-12 me-5">
                <SelectIcon name={item.name} />
              </div>
            </div>
            <span className="w-[70%] float-left relative inline-block font-jua uppercase">
              {item.name}
            </span>
            <span className="w-[10%] float-right relative inline-block text-gray-700 font-jua uppercase">
              {">>"}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialAccount;
