"use client";
import React, { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/common/utils/use-dimensions";
import MeInfo from "./MeInfo";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const ToggleInfo = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <aside
        id="default-sidebar"
        className="hidden lg:block"
        aria-label="Sidebar"
      >
        <div className="fixed top-0 left-0 z-40 w-80 md:w-96 h-screen">
          <MeInfo />
        </div>
      </aside>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="block lg:hidden"
      >
        <motion.div
          className="fixed top-0 left-0 z-40 w-80 md:w-96 h-screen bg-white"
          variants={sidebar}
        >
          <MeInfo />
        </motion.div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default ToggleInfo;
