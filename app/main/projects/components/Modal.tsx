import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({
  modal,
  projects,
}: {
  modal: {
    active: boolean;
    index: number;
    image: number;
  };
  projects: {
    images: { src: string; url: string; title: string; color: string }[];
  }[];
}) => {
  const { active, index, image } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    <div className="hidden md:block">
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center z-[45] justify-center"
      >
        <div
          style={{ top: (image * 4 + index) * -100 + "%" }}
          className="h-full w-full absolute transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500"
        >
          {projects.map((project, index) => {
            return project.images.map((cmage, iindex) => {
              const { src, color } = cmage;
              return (
                <div
                  className="h-full w-full flex items-center justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index + iindex}`}
                >
                  <Image
                    src={`/images/project/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                    className="h-auto"
                  />
                </div>
              );
            });
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white absolute z-[50] flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="w-[80px] h-[80px] rounded-full bg-transparent text-white absolute z-[50] flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </div>
  );
};

export default Modal;