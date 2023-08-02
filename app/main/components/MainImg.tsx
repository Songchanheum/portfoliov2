import React, { MouseEventHandler, useRef } from "react";

import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Hover3d from "@/common/utils/hover";
import TextSpan from "@/common/TextSpan";
import { CircularText, DownArrow } from "@/common/utils/Icons";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const MainImg = ({
  scroll,
}: {
  scroll: MouseEventHandler<HTMLButtonElement>;
}) => {
  const hi = "안녕하세요!^웹 개발자^송찬흠입니다.".split("");
  const charImg = "/images/main/main.png";
  // const hi = "1234".split("");
  // const charImg = "";

  const ref = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const hover = Hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });
  const hover2 = Hover3d(hero, {
    x: -1,
    y: 3,
    z: 1,
  });

  const y = useParallax(scrollYProgress, 0);
  const y2 = useParallax(scrollYProgress, 200);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -200 }}
        className="h-screen lg:flex lg:justify-between items-center z-20 overflow-hidden"
      >
        <motion.div
          className="w-full lg:w-1/2"
          ref={ref}
          style={{
            y: y2,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <div
            className="h-[400px] w-[400px] opacity-30 lg:opacity-100 relative xl:h-[600px] xl:w-[600px] mx-10 lg:ms-20 float-right"
            ref={hero}
          >
            <Image
              src={charImg}
              alt="songs"
              fill
              className="hidden lg:block h-full w-full object-cover object-center"
              style={{
                transform: hover.transform,
              }}
            />
            <Image
              className="hidden lg:block -z-[1] absolute top-0 left-0 h-full w-full opacity-30"
              src="/images/main/main-bg.png"
              fill
              alt="songsbg"
              style={{
                scale: 1.1,
                transform: hover2.transform,
              }}
            />
            <Image
              src={charImg}
              alt="songs"
              fill
              className="fixed lg:hidden h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 z-40 flex flex-col justify-center items-center"
          style={{ y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.7 }}
            className="items-center"
          >
            {hi.map((letter, i) => {
              let text: any = letter;
              if (letter === " ") {
                text = "\u00A0";
              } else if (letter === "^") {
                return <br key={i} />;
              } else {
                text = letter;
              }
              return <TextSpan key={i}>{text}</TextSpan>;
            })}
          </motion.div>
          <div className="relative float-left top-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-400 text-sm md:text-xl"
            >
              Front-end Developer | Next TailwindCSS Framer Motion
            </motion.span>
          </div>
        </motion.div>
        {/* <div className="block lg:hidden w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.7 }}
          >
            {hi.map((letter, i) => {
              let text: any = letter;
              if (letter === " ") {
                text = "\u00A0";
              } else if (letter === "^") {
                return <br key={i} />;
              } else {
                text = letter;
              }
              return <TextSpan key={i}>{text}</TextSpan>;
            })}
          </motion.div>
          <div className="relative float-left top-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-gray-400 text-sm"
            >
              Front-end Developer | Next TailwindCSS Framer Motion
            </motion.span>
          </div>
        </div> */}
      </motion.div>
      <button onClick={scroll}>
        <div className="absolute bottom-8 right-8 animate-bounce z-[99] opacity-60">
          <div
            className="w-32 h-32 lg:w-52 lg:h-52 flex items-center justify-center relative"
            ref={scrollRef}
          >
            <CircularText className={"animate-spin-slow dark:invert"} />
            <DownArrow size={40} />
          </div>
        </div>
      </button>
    </section>
  );
};

export default MainImg;
