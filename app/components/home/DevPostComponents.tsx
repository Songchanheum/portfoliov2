"use client";

import { ReactNode, useEffect, useState } from "react";
import { useMutationRequest } from "@/common/hooks/useRequest";
import { useSearchParam } from "@/common/hooks/useSearchParam";
import { DevDetailPost, DevPost } from "./PostDetailComponents";

const DevPostComponents = ({
  toggle,
  showModal,
  setModalComp,
}: {
  toggle: () => void;
  showModal: boolean;
  setModalComp: (comp: ReactNode) => void;
}) => {
  const searchParam = useSearchParam();
  const selectTab = searchParam.getData("selectTab");

  const [projectData, setProjectData] = useState<ProjectType[]>();
  const [postUrlData, setPostData] = useState<MetaType[]>();

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
    console.log(showModal);
    toggle();
    if (!showModal) {
      setModalComp(<DevDetailPost setView={toggle} {...props} />);
    }
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
              code={e.code}
              showPostModal={showPostModal}
            />
          );
        })
      ) : (
        <></>
      )}

      {postUrlData && postUrlData?.length > 0 ? (
        postUrlData.map((e: MetaType) => {
          return (
            <DevPost
              key={e.title}
              title={e.title}
              image={e.image}
              desc={e.desc}
              url={e.url}
              code={e.code}
              showPostModal={showPostModal}
            />
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default DevPostComponents;
