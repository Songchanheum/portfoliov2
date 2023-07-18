import React, { ReactNode, useState } from "react";
import { motion, useAnimationControls, MotionValue } from "framer-motion";

export default function TextSpan({
  children,
}: {
  children: MotionValue<number> | MotionValue<string>;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      //   transition: {
      //     times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      //   },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      className="inline-block text-9xl"
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
}
