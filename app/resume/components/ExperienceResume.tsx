import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { EXPERIENCE_RESUME } from "../constatns";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Company = (props: CompanyType) => {
  return (
    <div className="w-[95%] h-fit p-3 mx-5 my-3 border-2 border-separate border-gray-100 rounded-3xl flex md:flex-row flex-col">
      <div className="mt-3 md:w-[25%] h-fit font-do text-lg flex  mb-10 md:mb-0 justify-center md:justify-end font-extralight">
        {props.due}
      </div>
      <div className="md:w-[75%] h-fit flex-col flex">
        <div className="flex flex-row justify-start items-center">
          <Image
            className="rounded-full w-12 h-12 bg-white mx-5"
            alt=""
            width={48}
            height={48}
            src={props.img}
          />
          <div className="flex flex-col md:flex-row">
            <p className="text-slate-900 font-d2 font-extrabold tracking-tighter pr-3 text-base">
              {props.title}
            </p>
            <span className="text-gray-400 text-sm">{props.team}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-start ms-3 mt-3 space-x-1">
          {props.skill.map((e, i) => {
            return (
              <div key={e + i}>
                <img
                  src={`https://img.shields.io/badge/${e}-FFFFFF?style=flat&logo=${e}&logoColor=black`}
                />
              </div>
            );
          })}
        </div>
        <div className="ps-5">
          <p className="text-lg font-do font-extralight m-3 mt-7">프로젝트</p>
          <dl className="text-gray-900 ps-6 space-y-3">
            {props.project.map((e, i) => {
              return (
                <div
                  key={e.title + i}
                  className="flex-col list-square list-item"
                >
                  <Link
                    href={{
                      pathname: "/resume/project",
                      query: `code=${e.code}`,
                    }}
                    className="no-underline hover:underline decoration-wavy group  flex items-center"
                  >
                    <dt className="mb-1 text-base font-semibold cursor-pointer w-[90%]">
                      {e.title}{" "}
                    </dt>
                    <BsArrowRight
                      className="font-bold ms-2 translate-x-0 group-hover:translate-x-3 group-hover:text-red-500 transition-all duration-300"
                      size={20}
                    />
                  </Link>
                  <dd className="text-sm  text-gray-500">{e.due}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

const ExperienceResume = () => {
  return (
    <div>
      {EXPERIENCE_RESUME.map((e, i) => {
        return <Company key={e.title + i} {...e} />;
      })}
    </div>
  );
};

export default ExperienceResume;
