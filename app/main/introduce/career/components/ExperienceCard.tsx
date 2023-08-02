import React from "react";

import { motion } from "framer-motion";

const ExperienceCard = ({ data }: { data: CareerType }) => {
  const img = data.img;
  return (
    <article className="flex flex-col xl:flex-row rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-gray-200 p-10 hover:opacity-100 active:cursor-grabbing opacity-40 cursor-grab transition-opacity ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 roudned-full object-center xl:w-[200px] xl:h-[200px]"
        src={img}
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light font-jua">{data.title}</h4>
        <p className="font-bold text-2xl mt-1 font-do">{data.subTitle}</p>
        <p className="uppercase pt-3 text-lg text-gray-700 font-d2">
          {data.due}
        </p>
        <div className="flex space-x-2 my-4">
          {data.skill.map((item, index) => {
            return (
              <img
                key={item + index}
                className="h-10 w-10"
                src={`https://skillicons.dev/icons?i=${item}&theme=light`}
                alt=""
              />
            );
          })}
        </div>
        <ul className="list-disc space-y-3 ml-5 text-lg font-do">
          {data.experience.map((item, index) => {
            return <li key={item + index}>{item}</li>;
          })}
        </ul>
        <button> 더보기 </button>
      </div>
    </article>
  );
};

export default ExperienceCard;
