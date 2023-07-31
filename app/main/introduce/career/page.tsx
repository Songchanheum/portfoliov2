"use client";
import PageHeader from "@/app/main/components/PageHeader";
import PageWrapper from "@/common/PageWrapper";
import React from "react";

const page = () => {
  return (
    <PageWrapper>
      <div>
        <PageHeader title="Dev Timeline" />
      </div>
      <div>
        <PageHeader title="Education & Credential" />
      </div>
    </PageWrapper>
  );
};

export default page;
