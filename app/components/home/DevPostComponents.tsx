"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMutationRequest } from "@/common/hooks/useRequest";
import { getUrlMeta } from "@/common/utils/webScrapping";
import { useSearchParam } from "@/common/hooks/useSearchParam";
import { motion } from "framer-motion";

const DevPostComponents = () => {
  const searchParam = useSearchParam();
  const selectTab = searchParam.getData("selectTab");

  const [projectData, setProjectData] = useState<ProjectType[]>();
  const [postUrlData, setPostData] = useState<Object[]>();
  const [openPost, setOpenPost] = useState<boolean>(false);

  const {
    data: proData,
    request: proRequest,
    isLoading: proIsLoading,
    reset: proReset,
  } = useMutationRequest<ProjectType[]>({
    requestPath: "project",
    reactQueryKey: "GET_HOME_LIST",
    requestMethod: "GET",
  });
  const {
    data: postData,
    request: postRequest,
    isLoading: postIsLoading,
    reset: postReset,
  } = useMutationRequest<any>({
    requestPath: "post",
    reactQueryKey: "GET_POST_LIST",
    requestMethod: "GET",
  });

  useEffect(() => {
    proReset();
    postReset();
    setProjectData([]);
    setPostData([]);

    console.log(selectTab);
    switch (selectTab) {
      case "dev":
        proRequest();
        break;
      case "post":
        postRequest();
        break;
    }
  }, [selectTab]);

  useEffect(() => {
    if (proData) {
      setProjectData(proData);
    } else if (postData) {
      setPostData(postData);
    }
  }, [proData, postData]);
  return (
    <>
      {proIsLoading || postIsLoading ? (
        <>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
          <div className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 animate-pulse"></div>
        </>
      ) : (
        <></>
      )}
      {projectData && projectData?.length > 0 ? (
        projectData.map((e: ProjectType) => {
          return (
            <DevPost
              key={e.code}
              title={e.title}
              image={e.src ? `/images/project/${e.src}` : null}
              desc={e.description}
              url={`/resume/project?code=${e.code}`}
            />
          );
        })
      ) : (
        <></>
      )}

      {postUrlData && postUrlData?.length > 0 ? (
        postUrlData.map((e: any) => {
          return (
            <DevPost
              key={e.title}
              title={e.title}
              image={e.image}
              desc={e.desc}
              url={e.url}
            />
          );
        })
      ) : (
        <></>
      )}
      {openPost ? <div></div> : <></>}
    </>
  );
};

function DevPost({
  key,
  title,
  image,
  desc,
  url,
}: {
  key: string;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
}) {
  return (
    <>
      <div
        key={key}
        className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 cursor-pointer"
      >
        {image ? (
          <motion.img
            src={`${image}`}
            alt={`${title}`}
            className="object-cover h-full group-hover:grayscale"
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ opacity: 0.5 }}
          ></motion.img>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ opacity: 0.5 }}
          >
            {title}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default DevPostComponents;
