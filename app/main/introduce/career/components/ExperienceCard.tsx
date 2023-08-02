import React from "react";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const ExperienceCard = ({ data }: { data: CareerType }) => {
  const { theme } = useTheme();
  const img = data.img;
  return (
    <article className="flex flex-col xl:flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-gray-200 dark:bg-gray-800 p-10 active:cursor-grabbing lg:opacity-40 lg:hover:opacity-100 cursor-grab transition-opacity ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-3xl object-center xl:w-[200px] xl:h-[200px]"
        src={img}
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-light font-jua">
          {data.title}
        </h4>
        <p className="font-bold text-base md:text-xl lg:text-2xl mt-1 font-do">
          {data.subTitle}
        </p>
        <p className="uppercase pt-3 text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-200 font-d2">
          {data.due}
        </p>
        <div className="grid grid-cols-6 lg:grid-cols-8 my-4 items-center justify-start">
          {data.skill.map((item, index) => {
            return (
              <img
                key={item + index}
                className="h-10 w-10 m-2"
                src={`https://skillicons.dev/icons?i=${item}&theme=${
                  theme ?? "light"
                }`}
                alt=""
              />
            );
          })}
        </div>
        <ul className="list-disc space-y-3 ml-5 text-sm md:text-base lg:text-lg font-do">
          {data.experience.map((item, index) => {
            return <li key={item + index}>{item}</li>;
          })}
        </ul>
        <button className="mt-5 rounded-full bg-orange-200 dark:bg-purple-700 px-5 py-2 text-sm lg:text-base">
          ⇱ Read More
        </button>
      </div>
    </article>
  );
};

export default ExperienceCard;
