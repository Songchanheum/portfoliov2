import React from "react";
import PageWrapper from "@/common/PageWrapper";
import IntroduceComponents from "./components/IntroduceComponents";
import SkillComponents from "./components/SkillComponents";

export default function AboutPage() {
  return (
    <PageWrapper>
      <IntroduceComponents />
      <SkillComponents />
    </PageWrapper>
  );
}
