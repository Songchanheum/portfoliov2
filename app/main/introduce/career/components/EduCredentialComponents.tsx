"use client";
import PageHeader from "@/app/main/components/PageHeader";
import { MotionValue, motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { CRE_CARD, EDU_CARD } from "../constants";
import EduCredentailDetail from "./EduCredentailDetail";

export const EduCredential = ({
  ref,
  scroll,
  title,
  listConst,
}: {
  ref: React.RefObject<HTMLDivElement>;
  scroll: MotionValue<number>;
  title: string;
  listConst: ExperienceCardType[];
}) => {
  return (
    <div ref={ref} className="lg:w-[45%] w-full mx-auto relative mt-24">
      <h3 className="absolute -top-12 left-28 uppercase font-bold text-orange-800 dark:text-violet-300">
        {title}
      </h3>
      <motion.div
        style={{ scaleY: scroll }}
        className="absolute left-9 top-0 w-[3px] h-full origin-top bg-gray-300 dark:bg-white"
      />
      <ul className="w-full flex flex-col items-start justify-between ml-8">
        {listConst?.map((e, i) => {
          return (
            <EduCredentailDetail
              key={e.title + i}
              title={e.title}
              subtitle={e.subtitle}
              time={e.time}
              text={e.text}
            />
          );
        })}
      </ul>
    </div>
  );
};
export const EduCredentialList = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "start start"],
  });
  return (
    <div className="lg:flex">
      <EduCredential
        ref={ref1}
        scroll={scrollYProgress1}
        title="Education"
        listConst={EDU_CARD}
      />
      <EduCredential
        ref={ref2}
        scroll={scrollYProgress2}
        title="Credential"
        listConst={CRE_CARD}
      />
    </div>
  );
};
const EduCredentialComponents = () => {
  return (
    <div className="my-10 scroll-y-hidden">
      <PageHeader title="Education & Credential" />
      <EduCredentialList />
    </div>
  );
};

export default EduCredentialComponents;
