import React from "react";
import ResumeWrapper from "./components/ResumeWrapper";
import Timeline from "./components/Timeline";
import ExperienceResume from "./components/ExperienceResume";
import ProjectList from "./components/ProjectList";
import EduTimeline from "./components/EduTimeline";

const ResumePage = () => {
  return (
    <div className="px-4 pt-20 lg:ms-96 lg:pt-10">
      <ResumeWrapper title="소개글">
        <p className="text-d2 text-base p-2 leading-7">
          협력과 소통을 중시하고 신규 기술 트렌드에 관심이 있습니다. 새로운
          도전을 꿈꿉니다.
          <br />
          React, VueJS, Angular등 javascript기반 Framework 개발 경험이 있으며
          JAVA Spring Framwork, Spring boot, eGovFramework를 이용한 백엔드
          서버개발에도 참여하였습니다.
          <br />
          현재 NextJS 기반 SSR Page 개발에 관심을 갖고 있습니다
        </p>
      </ResumeWrapper>
      <ResumeWrapper title="타임라인">
        <Timeline />
      </ResumeWrapper>
      <ResumeWrapper title="업무 경험">
        <ExperienceResume />
      </ResumeWrapper>
      <ResumeWrapper title="개인 프로젝트">
        <ProjectList />
      </ResumeWrapper>
      <ResumeWrapper title="교육 및 자격증">
        <EduTimeline />
      </ResumeWrapper>
    </div>
  );
};

export default ResumePage;
