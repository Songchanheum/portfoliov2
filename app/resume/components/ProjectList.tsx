"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];
const Project = ({
  index,
  title,
  setModal,
}: {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full justify-between items-center px-[100px] py-[50px] border-t-2 cursor-pointer transition-all duration-200 last-of-type:border-b-2 hover:opacity-50 group"
    >
      <h2 className="flex group-hover:-translate-x-[10px] translate-x-0 text-6xl m-0 font-normal transition-all duration-[400ms]">
        {title}
      </h2>
      <p className="group-hover:translate-x-[10px] translate-x-0 transition-all duration-[400ms] font-light">
        Design & Development
      </p>
    </div>
  );
};
const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div>
      <div className="flex h-fit w-[95%] flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default ProjectList;
