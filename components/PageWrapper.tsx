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
        "mt-header",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
