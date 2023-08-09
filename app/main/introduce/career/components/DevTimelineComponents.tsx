"use client";
import PageHeader from "@/app/main/components/PageHeader";
import React, { useEffect, useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { experience } from "../constants";
import { fadeIn } from "@/common/utils/variants";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FreeMode,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const DevTimelineComponents = () => {
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);
  return (
    <div
      className="container w-full h-fit relative mx-auto items-center"
      ref={ref}
    >
      <PageHeader title="Dev Timeline" />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          modules={[FreeMode, Pagination, Navigation, EffectCoverflow]}
          pagination={{ clickable: true }}
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 1,
          }}
          className="relative mx-auto w-full"
        >
          {experience?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="relative !flex justify-center items-center !w-[300px] xs:!w-[400px] sm:!w-[500px] md:!w-[600px] xl:!w-[800px] bg-center bg-cover mb-10"
              >
                <ExperienceCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width - 200,
          }}
          className="flex space-x-5 p-10 snap-x snap-mandatory"
        >
          {experience?.map((item, index) => {
            return <ExperienceCard data={item} key={index} />;
          })}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default DevTimelineComponents;
