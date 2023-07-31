import React from "react";

import { motion } from "framer-motion";

const ExperienceCard = () => {
  const img = "/images/main/main.png";
  return (
    <article className="flex flex-col xl:flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-200 p-10 hover:opacity-100 active:cursor-grabbing opacity-40 cursor-grab transition-opacity ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 roudned-full object-cover object-center xl:w-[200px] xl:h-[200px]"
        src={img}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Alti-Mobility</h4>
        <p className="font-bold text-2xl mt-1">123</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10"
            src="https://skillicons.dev/icons?i=react&theme=light"
            alt=""
          />
          <img
            className="h-10 w-10"
            src="https://skillicons.dev/icons?i=react&theme=light"
            alt=""
          />
          <img
            className="h-10 w-10"
            src="https://skillicons.dev/icons?i=react&theme=light"
            alt=""
          />
          <img
            className="h-10 w-10"
            src="https://skillicons.dev/icons?i=react&theme=light"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">123 - 456</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>1234</li>
          <li>1234</li>
          <li>1234</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
