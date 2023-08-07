"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

const tarinsitionVariants = {
  initial: {
    x: "0%",
    width: "0%",
  },
  animate: {
    x: ["0%", "100%", "0%"],
    width: ["0%", "100%", "0%"],
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[99] bg-orange-300 dark:bg-slate-900"
        variants={tarinsitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 1.2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[98] bg-orange-200 dark:bg-violet-950"
        variants={tarinsitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[97] bg-orange-100 dark:bg-violet-900"
        variants={tarinsitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className={classNames(
          "min-h-screenHeightWithoutHeader",
          "mt-header mx-auto rounded-sm px-6 opacity-90 max-w-xl overflow-x-hidden md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
          className
        )}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
