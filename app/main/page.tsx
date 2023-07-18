"use client";
import React from "react";
import TextSpan from "../../components/TextSpan";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

function Main() {
  const hi = "안녕하세요!^웹 개발자^송찬흠입니다.".split("");
  const charImg = "/images/main/main.png";
  // const hi = "1234".split("");
  // const charImg = "";
  const control = useAnimationControls();

  const handleMouseMove = (e: React.MouseEvent) => {
    const mousePageX = e.pageX;
    const mousePageY = e.pageY;

    // 마우스 좌표값 기준점을 가운데로 변경
    const centerPageX = window.innerWidth / 2 - mousePageX;
    const centerPageY = window.innerHeight / 2 - mousePageY;

    // centerPage 최소값 -100 최대값 100 설정 (! Point)
    const maxPageX = Math.max(-200, Math.min(100, centerPageX));
    const maxPageY = Math.max(-200, Math.min(100, centerPageY));

    // 각도 줄이는 설정
    const anglePageX = maxPageX * 0.1;
    const anglePageY = maxPageY * 0.1;

    // 부드럽게 설정
    let softPageX = 0;
    let softPageY = 0;
    softPageX += (anglePageX - softPageX) * 0.4;
    softPageY += (anglePageY - softPageY) * 0.4;

    control.start({
      transform: `perspective(600px) rotateX(${softPageX}deg) rotateY(${softPageY}deg)`,
    });
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: -88 }}
        exit={{ opacity: 1, y: -200 }}
        className="h-screen flex justify-between items-center"
      >
        <div className="w-1/2">
          <div className="relative h-[600px] w-[600px] ms-20 float-right">
            <motion.img
              className="block h-full w-full object-cover object-center opacity-50"
              animate={control}
              onMouseMove={(e) => handleMouseMove(e)}
              src={charImg}
            />
            <img
              className="-z-[1] absolute top-0 left-0 h-full w-full opacity-30"
              src="/images/main/main-bg.png"
            />
          </div>
        </div>
        <div className="w-1/2">
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
        </div>
      </motion.div>
    </>
  );
}

export default Main;
