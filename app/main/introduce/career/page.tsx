import React from "react";
import DevTimelineComponents from "./components/DevTimelineComponents";
import EduCredentialComponents from "./components/EduCredentialComponents";
import PageWrapper from "@/common/PageWrapper";

const CareerPage = () => {
  return (
    <PageWrapper>
      <DevTimelineComponents />
      <EduCredentialComponents />
    </PageWrapper>
  );
};

export default CareerPage;
