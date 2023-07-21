"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

function Experience({ text, num }: { text: string; num: string }) {
  return (
    <div className="w-1/3 grid place-items-center">
      <span className="text-6xl font-bold mb-5">{num}+</span>
      <span className="font-jua"> {text}</span>
    </div>
  );
}
function IntroduceText({ children }: { children: React.ReactNode }) {
  return <p className="font-d2 mb-4 text-lg">{children}</p>;
}
export default function page() {
  // const myPic = "";
  const myPic = "/images/introduce/mypic.png";
  return (
    <PageWrapper>
      <div className="mb-32">
        <PageHeader title="Introduce" />
        {/* <PageHeader title="123" /> */}
        <div className="flex mb-10">
          <div className="w-2/3 col-span-3 flex flex-col items-start justify-start pr-10">
            <h2 className="text-gray-500 font-bold mb-4">소개글</h2>
            <IntroduceText>
              <span className="text-2xl">안</span>녕하세요. 프론트엔드 개발자
              송찬흠입니다. 사용자 중심의 편리하고 아름다운 웹 페이지를 만들고자
              하는 열정이 넘친는 웹 개발자입니다. 총 개발 7년 / 웹 프론트엔드
              개발 4년의 경력을 가지고 있으며 새롭고 혁신적인 개발을 하기위해
              노력하고 있습니다.
            </IntroduceText>
            <IntroduceText>
              UI/UX 요소를 꾸미는 매력에 빠져 프론트엔드 개발/디자인에 집중하고
              있습니다. 단지 디자인적으로 보기좋게 개발하는 것 이상으로 사용하고
              즐길 수 있는 직관적인 경험을 제공하고 싶습니다.
            </IntroduceText>
            <IntroduceText>
              사용자 중심적 사고로 생각하며 모든 프로젝트에 임하고 있습니다.
              많지 않지만 제 경험/기술과 열정을 다음 프로젝트에 반영할 수 있는
              기회를 기대하고 있습니다.
            </IntroduceText>
          </div>
          <div className="w-1/3 p-4">
            <div className="border-2 border-black border-r-8 border-b-8 rounded-2xl h-fit p-8">
              <img
                src={myPic}
                alt="alt"
                className="w-[80%] m-auto h-auto rounded-2xl bg-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex hover:text-orange-400 transition-colors duration-500">
          <Experience text="Year Of Experience" num="7" />
          <Experience text="Projects Completed" num="20" />
          <Experience text="Dev Toy Project" num="10" />
        </div>
      </div>
      <div>
        <PageHeader title="Skill" />
      </div>
    </PageWrapper>
  );
}
