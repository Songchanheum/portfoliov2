import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const EduCredentailDetail = ({
  title,
  subtitle,
  time,
  text,
}: ExperienceCardType) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[80%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon ref={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl w-full">
          {title}
        </h3>
        <span className="font-medium text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 w-full mb-2">
          {subtitle} | {time}
        </span>
        <p className="font-medium w-full text-base md:text-lg lg:text-xl">
          {text}
        </p>
      </motion.div>
    </li>
  );
};

export default EduCredentailDetail;
