"use client";
import PageHeader from "@/app/main/components/PageHeader";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { CRE_CARD, EDU_CARD } from "../constants";
import EduCredentailDetail from "./EduCredentailDetail";

const EduCredentialComponents = () => {
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
    <div className="my-10 scroll-y-hidden">
      <PageHeader title="Education & Credential" />
      <div className="lg:flex">
        <div ref={ref1} className="lg:w-[45%] w-full mx-auto relative mt-24">
          <h3 className="absolute -top-12 left-28 uppercase font-bold text-orange-800 dark:text-violet-300">
            Education
          </h3>
          <motion.div
            style={{ scaleY: scrollYProgress1 }}
            className="absolute left-9 top-0 w-[4px] h-full origin-top bg-slate-900 dark:bg-white"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {EDU_CARD.map((e, i) => {
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
        <div ref={ref2} className="lg:w-[45%] w-full mx-auto relative mt-24">
          <h3 className="absolute -top-12 left-28 uppercase font-bold text-orange-800 dark:text-violet-300">
            Credential
          </h3>
          <motion.div
            style={{ scaleY: scrollYProgress2 }}
            className="absolute left-9 top-0 w-[4px] h-full origin-top bg-slate-900 dark:bg-white"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            {CRE_CARD.map((e, i) => {
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
      </div>
    </div>
  );
};

export default EduCredentialComponents;
