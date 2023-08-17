"use client";
import { PROJECT } from "@/app/main/projects/constants";
import React, { useState } from "react";

const Project = ({
  project,
}: {
  project: {
    color: string;
    src: string;
    url: string;
    title: string;
  }[];
}) => {
  return (
    <>
      {project.map((e, i) => {
        return (
          <div
            key={e.title + i}
            className="flex w-full justify-between items-center px-[100px] py-[20px] border-t-2 cursor-pointer transition-all duration-200 last-of-type:border-b-2 hover:opacity-50 group"
          >
            <h2 className="flex group-hover:-translate-x-[10px] translate-x-0 text-2xl m-0 font-normal transition-all duration-[400ms]">
              {e.title}
            </h2>
            <p className="group-hover:translate-x-[10px] translate-x-0 transition-all duration-[400ms] font-light">
              Design & Development
            </p>
          </div>
        );
      })}
    </>
  );
};
const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div>
      <div className="flex h-fit w-[95%] flex-col items-center justify-center">
        {PROJECT.slide.map((project, index) => {
          return <Project key={index} project={project.images} />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
