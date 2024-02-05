"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMutationRequest } from "@/common/hooks/useRequest";

const DevPostComponents = () => {
  const [projectData, setProjectData] = useState<ProjectType[]>();

  const { data, request, isLoading } = useMutationRequest<ProjectType[]>({
    requestPath: "project",
    reactQueryKey: "GET_HOME_LIST",
    requestMethod: "GET",
  });
  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    console.log(data);
    if (data) {
      setProjectData(data);
    }
  }, [data]);
  return (
    <>
      {projectData && projectData?.length > 0 ? (
        projectData.map((e: ProjectType) => {
          return (
            <div
              key={e.code}
              className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100"
            >
              {e.src ? (
                <Image
                  src={`/images/project/${e.src}`}
                  width={500}
                  height={500}
                  alt={`${e.title}`}
                  className="object-cover h-full"
                ></Image>
              ) : (
                <>No Image</>
              )}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default DevPostComponents;
