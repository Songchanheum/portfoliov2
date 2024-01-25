"use client";
import React, { useLayoutEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PROJECT } from "@/app/main/projects/constants";
import { EXPERIENCE_RESUME } from "../constatns";
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

interface CustomProjectType extends ProjectType {
  color?: string;
  src?: string;
  icon?: string;
  [prop: string]: any;
}

const PR_INFO = [
  { title: "업무 내용", name: "info" },
  { title: "역할", name: "role" },
  { title: "목표", name: "purpose" },
  { title: "성과", name: "result" },
  { title: "Link", name: "link" },
];
const ProjectDetail = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [info, setInfo] = useState<CustomProjectType>();

  useLayoutEffect(() => {
    const projectCode = searchParam.get("code");
    if (projectCode) {
      const pList: any =
        projectCode.indexOf("P") > -1
          ? PROJECT.slide.map((e) => e.images).flat(Infinity)
          : EXPERIENCE_RESUME.map((e) => e.project).flat(Infinity);
      const pr: CustomProjectType = pList.find(
        (e: { code: string }) => e.code === projectCode
      );
      if (pr) {
        setInfo(pr);
        console.log(pr);
      } else {
        router.replace("/resume");
      }
    } else {
      router.replace("/resume");
    }
  }, [searchParam]);

  return (
    <div className="px-12 pt-20 lg:ms-96 lg:pt-10 pb-32 ">
      {info ? (
        <div className="py-3 px-5 md:px-12 flex flex-col">
          <Link
            href="/resume"
            className="text-5xl tracking-tighter font-d2 text-gray-800 mb-8"
          >
            <BiChevronLeft />
          </Link>
          {info.src ? (
            <div className="flex justify-center items-center">
              <Image
                src={`/images/project/${info.src}`}
                alt=""
                width={1280}
                height={720}
                className="md:w-[640px] md:h-[360px] rounded-2xl mb-12 border-b-8 border-r-8 border-slate-700"
              />
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-col justify-start items-center">
            <h2 className="font-bold text-3xl">{info.title}</h2>
            <p className="font-bold text-base text-gray-400 px-3 md:px-10 mb-5">
              {info.due}
            </p>
            <p className="text-base font-medium text-slate-600">
              {info.description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-3">
            <p className="text-lg font-light font-do ">사용 기술 </p>
            <div className="flex flex-wrap justify-start ms-3 space-x-1">
              {info.skill.map((e, i) => {
                return (
                  <div key={e + i}>
                    <img
                      src={`https://img.shields.io/badge/${e}-FFFFFF?style=flat&logo=${e}&logoColor=black`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <ol className="space-y-4 text-gray-500 mt-10 text-base">
            {PR_INFO.map((e, i) => {
              return (
                <>
                  {info[e.name] ? (
                    <li key={i}>
                      <div className="flex items-center space-x-3">
                        <svg
                          className="flex-shrink-0 w-3.5 h-3.5 text-violet-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                        <span>{e.title}</span>
                      </div>
                      <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                        {info[e.name].map((e1: string, i1: number) => {
                          return (
                            <li key={i1}>
                              {e.name === "link" ? (
                                <Link href={e1}>{e1}</Link>
                              ) : (
                                e1
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </ol>
        </div>
      ) : (
        <div>Roading ...</div>
      )}
    </div>
  );
};

export default ProjectDetail;
