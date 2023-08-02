"use client";
import React, { useState } from "react";
import PageHeader from "@/app/main/components/PageHeader";
import Skill from "./Skill";
import { skillData } from "../constants";

const SkillComponents = () => {
  const [dataIndex, setDataIndex] = useState<number>(0);
  return (
    <div>
      <PageHeader title="Skill" />
      <div className="container mx-auto h-full flex flex-col items-center gap-x-6">
        <div>
          <div className="flex gap-x-12 mx-auto mb-8 justify-center">
            {skillData.map((item, index) => {
              return (
                <div
                  key={item.title + index}
                  className={`${
                    index === dataIndex &&
                    "text-violet-600 after:bg-violet-600 after:w-full after:transitio-all after:duration-300"
                  } font-extrabold ursor-pointer capitalize text-sm md:text-base lg:text-2xl relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setDataIndex(index)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="min-h-[800px] flex relative flex-col px-1 space-y-5 mx-auto items-start">
            {skillData[dataIndex].info.map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div className="w-full">
                    <p className="text-gray-600 font-d2 font-bold">
                      {item.title}
                    </p>
                  </div>
                  <div className="grid xl:grid-cols-6 grid-cols-4 gap-5">
                    {item.src.map((skillItem, skillIndex) => {
                      return (
                        <Skill
                          key="skillIndex"
                          src={`https://skillicons.dev/icons?i=${skillItem}&theme=light`}
                          percent={item.percent[skillIndex]}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponents;
