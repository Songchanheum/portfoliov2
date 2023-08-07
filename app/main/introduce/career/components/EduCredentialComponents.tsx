"use client";
import PageHeader from "@/app/main/components/PageHeader";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { CRE_CARD, EDU_CARD } from "../constants";

const Detail = ({ title, subtitle, time, text }: ExperienceCardType) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[80%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl w-full">
          {title}
        </h3>
        <span className="font-medium text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 w-full mb-2">
          {subtitle} | {time}
        </span>
        <p className="font-medium w-full text-base md:text-lg lg:text-xl">
          {text}
        </p>
      </motion.div>
    </li>
  );
};

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
                <Detail
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
                <Detail
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
