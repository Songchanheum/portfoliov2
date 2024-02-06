"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMutationRequest } from "@/common/hooks/useRequest";
import { useSearchParam } from "@/common/hooks/useSearchParam";
import { motion } from "framer-motion";

const DevPostComponents = () => {
  const searchParam = useSearchParam();
  const selectTab = searchParam.getData("selectTab");

  const [projectData, setProjectData] = useState<ProjectType[]>();
  const [postUrlData, setPostData] = useState<Object[]>();
  const [openPost, setOpenPost] = useState<MetaType>();
  const [showModal, setShowModal] = useState<boolean>(false);

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

  function showPostModal(props: MetaType) {
    console.log(props, showModal);
    if (!showModal) {
      setOpenPost(props);
    }
    setShowModal(!showModal);
  }
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
              showPostModal={showPostModal}
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
              showPostModal={showPostModal}
            />
          );
        })
      ) : (
        <></>
      )}
      <DevDetailPost view={showModal} setView={setShowModal} {...openPost} />
    </>
  );
};
function DevDetailPost({
  view,
  setView,
  title,
  image,
  desc,
  url,
}: {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
}) {
  return (
    <>
      {view ? (
        <>
          <button
            className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-30 cursor-default"
            onClick={() => setView(false)}
          ></button>
          <div className="fixed top-12 left-[50%] md:left-[calc(50%+35px)] 2xl:left-[calc(50%+122px)] translate-x-[-50%] 2xl:w-[75%] w-[90%] h-[80%] bg-white z-40 rounded-xl">
            <div>{title}</div>
            <div>{image}</div>
            <div>{desc}</div>
            <div>{url}</div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
function DevPost(props: {
  key: string;
  title?: string | null;
  image?: string | null;
  desc?: string | null;
  url?: string | null;
  showPostModal: (e: any) => void;
}) {
  return (
    <>
      <button
        key={props.key}
        className="max-w-[311px] after:pb-[100%] flex justify-center items-center bg-gray-100 cursor-pointer"
        onClick={() => props.showPostModal({ ...props })}
      >
        {props?.image ? (
          <motion.img
            src={`${props?.image}`}
            alt={`${props?.title}`}
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
            {props?.title}
          </motion.div>
        )}
      </button>
    </>
  );
}

export default DevPostComponents;
