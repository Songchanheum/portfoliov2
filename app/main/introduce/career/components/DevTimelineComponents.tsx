"use client";
import PageHeader from "@/app/main/components/PageHeader";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ExperienceCard from "./ExperienceCard";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { experience } from "../constants";

const DevTimelineComponents = () => {
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollWidth, ref.current.offsetWidth);
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);
  return (
    <div className="w-full h-screen relative mx-auto items-center" ref={ref}>
      <PageHeader title="Dev Timeline" />
      <div className="w-fit overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width - 200,
          }}
          className="flex space-x-5 p-10 snap-x snap-mandatory"
        >
          {experience?.map((item, index) => {
            return <ExperienceCard data={item} key={index} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default DevTimelineComponents;
