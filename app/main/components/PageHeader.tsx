import React from "react";

import { motion } from "framer-motion";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="xl:h-32 h-16">
      <motion.span className="text-4xl lg:text-6xl xl:text-8xl pt-3 mx-auto font-bold font-do">
        {title}
      </motion.span>
    </div>
  );
};

export default PageHeader;
