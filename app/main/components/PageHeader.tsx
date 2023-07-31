import React from "react";

import { motion } from "framer-motion";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="h-32">
      <motion.span className="text-8xl pt-3 mx-auto font-bold">
        {title}
      </motion.span>
    </div>
  );
};

export default PageHeader;
