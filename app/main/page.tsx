"use client";
import React from "react";
import TextSpan from "../../components/TextSpan";
import { motion, useAnimationControls } from "framer-motion";

function Main() {
  const hi = "안녕하세요!^웹 개발자^송찬흠입니다.".split("");
  const control = useAnimationControls();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    control.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };
  return (
    <>
      <div className="h-screen flex justify-start items-center">
        <div className="relative h-[600px] w-[600px] ms-20">
          <motion.img
            className="block h-full w-full object-cover object-center opacity-50"
            animate={control}
            onMouseMove={(e) => handleMouseMove(e)}
            src="/images/main/main.png"
          />
          <img
            className="-z-[1] absolute top-0 left-0 h-full w-full opacity-30"
            src="/images/main/main-bg.png"
          />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {hi.map((letter, i) => {
              let text: any = letter;
              if (letter === " ") {
                text = "\u00A0";
              } else if (letter === "^") {
                return <br />;
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
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Front-end Developer | Next TailwindCSS Framer Motion
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
