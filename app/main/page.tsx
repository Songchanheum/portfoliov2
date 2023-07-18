"use client";
import React from "react";
import TextSpan from "../../components/TextSpan";
import { motion, useAnimationControls } from "framer-motion";

function Main() {
  const sentence = "Hello".split("");
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
      <div className="h-screen flex justify-center items-center">
        <div className="relative h-[600px] w-[360px]">
          <motion.img
            className="block h-full w-full object-cover object-center"
            animate={control}
            onMouseMove={(e) => handleMouseMove(e)}
            src="/images/common/moveImg1_right.png"
          />
          <div className="-z-[1] absolute top-0 left-0 h-full w-full bg-gray-200"></div>
        </div>
        <div>
          {sentence.map((letter, i) => {
            return <TextSpan key={i}>{letter}</TextSpan>;
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
