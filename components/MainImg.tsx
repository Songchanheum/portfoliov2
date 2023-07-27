import React, { MouseEventHandler, useRef } from "react";

import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Hover3d from "./utils/hover";
import TextSpan from "./TextSpan";
import { CircularText, DownArrow } from "./utils/Icons";

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

  const y = useParallax(scrollYProgress, -700);
  const y2 = useParallax(scrollYProgress, 200);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -200 }}
        className="h-screen flex justify-between items-center z-20 overflow-hidden"
      >
        <motion.div
          className="w-1/2"
          ref={ref}
          style={{
            y: y2,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <div
            className="relative h-[600px] w-[600px] ms-20 float-right"
            ref={hero}
          >
            <Image
              src={charImg}
              alt="songs"
              fill
              className="block h-full w-full object-cover object-center"
              style={{
                transform: hover.transform,
              }}
            />
            <Image
              className="-z-[1] absolute top-0 left-0 h-full w-full opacity-30"
              src="/images/main/main-bg.png"
              fill
              alt="songsbg"
              style={{
                scale: 1.1,
                transform: hover2.transform,
              }}
            />
          </div>
        </motion.div>
        <motion.div className="w-1/2 relative z-10" style={{ y }}>
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
              className="text-gray-400"
            >
              Front-end Developer | Next TailwindCSS Framer Motion
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
      <button onClick={scroll}>
        <div className="absolute bottom-8 left-[50%] translate-x-[-50%] animate-bounce z-[99] opacity-60">
          <div
            className="w-32 h-32 flex items-center justify-center relative"
            ref={scrollRef}
          >
            <CircularText className={"animate-spin-slow"} />
            <DownArrow size={40} />
          </div>
        </div>
      </button>
    </section>
  );
};

export default MainImg;
