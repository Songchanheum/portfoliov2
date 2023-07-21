"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={classNames(
        "min-h-screenHeightWithoutHeader",
        "mt-header mx-auto rounded-sm px-6 opacity-90 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
