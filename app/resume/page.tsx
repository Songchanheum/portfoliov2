import ResumeWrapper from "./components/ResumeWrapper";
import Timeline from "./components/Timeline";
import ExperienceResume from "./components/ExperienceResume";
import ProjectList from "./components/ProjectList";
import EduTimeline from "./components/EduTimeline";

const ResumePage = () => {
  return (
    <div className="px-4 2xl:px-20 pt-20 lg:ms-96 lg:pt-10">
      <ResumeWrapper title="소개글">
        <p className="text-d2 text-base p-2 leading-7">
          협력과 소통을 중시하고 신규 기술 트렌드에 관심이 있습니다. 새로운
          도전을 꿈꿉니다.
          <br />
          Admin Page, CMS, NDK 등 앱/웹 가리지 않고 개발 및 운영하면서 다양한
          경험을 쌓아온 개발자입니다.
          <br />
          현재는 주로 프론트 개발을 담당하고 있으며 사용자 편의성 증가 및 서비스
          성장에 힘쓰고 있습니다.
          <br />
          <br />
          - OTT 플랫폼 통합 서비스 런칭, 5000+ 앱 서비스 개발 참여 경험이
          있습니다.
          <br />
          - 모빌리티 서비스 플랫폼 Admin Page 개발 및 고도화 참여하여 국내외
          다수 서비스 런칭 참여 경험이 있습니다.
          <br />
          <br />
          React, VueJS, Angular등 javascript기반 Framework 개발 경험이 있으며
          JAVA Spring Framwork, Spring boot, eGovFramework를 이용한 백엔드
          서버개발에도 참여하였습니다.
          <br />
          현재 NextJS/Nuxt 기반 SSR, @tanstack/react-query, recoil 등에 관심을
          갖고 있으며, F/E 설계 기반 프로젝트 리딩을 배우고 있습니다
          <br />
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
