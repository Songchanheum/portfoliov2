import { motion, useScroll } from "framer-motion";
import React, { RefObject } from "react";

const LiIcon = ({ ref }: { ref: RefObject<HTMLLIElement> }) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-gray-400 dark:stroke-white">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-orange-600 dark:stroke-violet-200 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-white dark:fill-slate-900"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-orange-600 dark:fill-violet-200"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
