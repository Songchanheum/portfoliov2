"use client";
import { PROJECT } from "@/app/main/projects/constants";
import React, { useEffect, useState } from "react";
import { Accordion } from "flowbite-react";
import Link from "next/link";

const ProjectList = () => {
  const [projectData, setProjectData] = useState<ProjectType[]>();
  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "https://songsintroduce.vercel.app/"
      }api/project`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        setProjectData(jsonData);
      });
  }, []);
  return (
    <div>
      <Accordion alwaysOpen>
        {projectData ? (
          projectData.map((project: ProjectType, index: number) => {
            return (
              <Accordion.Panel key={index} className="!ps-3 !p-2">
                <Accordion.Title className="text-lg ps-10 py-3">
                  {project.title}
                  <span className="ps-10 text-sm text-gary-300">
                    {project.due}
                  </span>
                </Accordion.Title>
                <Accordion.Content>
                  <div className="ps-5 my-5">
                    <p className="text-base font-do">{project.description}</p>
                    <ul className="mt-3">
                      <li className="text-base text-slate-700 ps-2">
                        프로젝트 내용
                        <ol className="space-y-1 list-disc list-inside text-sm font-d2 mt-2">
                          {project.info?.map((data, i) => {
                            return <li key={data + i}>{data}</li>;
                          })}
                        </ol>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href={{
                      pathname: "/resume/project",
                      query: { code: project.code },
                    }}
                  >
                    <div className="w-24 h-auto p-2 ms-5 mb-5 rounded-full bg-orange-200 hover:bg-orange-400 text-sm text-center align-middle transition-colors duration-300">
                      Read More
                    </div>
                  </Link>
                </Accordion.Content>
              </Accordion.Panel>
            );
          })
        ) : (
          <></>
        )}
      </Accordion>
    </div>
  );
};

export default ProjectList;
