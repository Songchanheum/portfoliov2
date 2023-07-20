import React from "react";

import { motion } from "framer-motion";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="h-32">
      <motion.span className="text-6xl pt-3 ml-24">{title}</motion.span>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5 }}
        className={`h-[3px] bg-gray-300 absolute left-0 top-20`}
      >
        &nbsp;
      </motion.span>
    </div>
  );
};

export default PageHeader;
