"use client";
import React from "react";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "@/common/utils/variants";
import IntroduceText from "./IntroduceText";
import PageHeader from "@/app/main/components/PageHeader";

function Experience({ text, num }: { text: string; num: number }) {
  return (
    <div className="w-1/3 grid place-items-center">
      <span className="text-6xl font-bold mb-5">
        <CountUp end={num} duration={5} /> +
      </span>
      <span className="font-jua"> {text}</span>
    </div>
  );
}
const IntroduceComponents = () => {
  // const myPic = "";
  const myPic = "/images/introduce/mypic.png";
  return (
    <div className="mb-32">
      <PageHeader title="Introduce" />
      {/* <PageHeader title="123" /> */}
      <div className="flex mb-10">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-2/3 col-span-3 flex flex-col items-start justify-start pr-10"
        >
          <h2 className="text-gray-500 font-bold mb-4">소개글</h2>
          <IntroduceText>
            <span className="text-2xl">안</span>녕하세요. 사용자의 편의성과
            디자인적 아름다움을 추구하는 열정을 가진 프론트엔드 개발자
            송찬흠입니다. 총 개발 7년 / 웹 프론트엔드 4년의 경력을 가지고
            있습니다.
          </IntroduceText>
          <IntroduceText>
            javascript를 기반으로 React를 주로 사용하고 Vue, AngularJS를 이용한
            경험도 가지고 있습니다. TailwindCSS를 이용하여 style 작업을 진행하고
            Ant Design, Chakra UI, Vuetify 등 UI Components 또한 상황에 맞게
            사용합니다. 최근 관심사는 Nextjs, Typescript 이며 진행중인
            프로젝트에 직접 사용하여 경험하고 있습니다.
          </IntroduceText>
          <IntroduceText>
            UI/UX 요소를 꾸미는 매력에 빠져 프론트엔드/디자인에 집중하고
            있습니다. 항상 사용자 중심적 사고로 개발하며 디자인적 요소를
            보기좋게 만드는 것 이상으로 사용자에게 직관적이고 즐거운 경험을
            제공할 수 있도록 노력합니다.
          </IntroduceText>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:block md:w-1/3 p-4"
        >
          <div className="border-2 border-black border-r-8 border-b-8 rounded-2xl h-fit p-8">
            <img
              src={myPic}
              alt="alt"
              className="w-[80%] m-auto h-auto rounded-2xl bg-gray-400"
            />
          </div>
        </motion.div>
      </div>

      <div className="hidden md:block">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full flex hover:text-orange-400 transition-colors duration-500"
        >
          <Experience text="Year Of Experience" num={7} />
          <Experience text="Projects Completed" num={30} />
          <Experience text="Dev Toy Project" num={10} />
        </motion.div>
      </div>
    </div>
  );
};

export default IntroduceComponents;
