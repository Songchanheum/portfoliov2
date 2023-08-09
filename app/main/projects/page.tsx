"use client";
import PageHeader from "@/app/main/components/PageHeader";
import PageWrapper from "@/common/PageWrapper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, FreeMode } from "swiper/modules";

import { RxArrowTopRight, RxDesktop } from "react-icons/rx";
import { WORK } from "./constants";

const WorkSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination, FreeMode]}
      className="h-[240px] sm:h-[340px]"
    >
      {WORK.map((e, i) => {
        return (
          <SwiperSlide key={e.title + i}>
            <div className="bg-white font-d2 dark:bg-slate-800 opacity-90 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:opacity-100 transition-all duration-300">
              <div className="text-4xl text-red-600 mb-8">
                {e.icon === "dev" ? <RxDesktop /> : <></>}
              </div>
              <div>
                <div className="mb-2 text-lg">{e.title}</div>
                <p className="leading-normal text-gray-800 dark:text-gray-200 text-base">
                  {e.description}
                </p>
              </div>
              <div className="text-3xl absolute top-3 right-3">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-red-600 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
const page = () => {
  return (
    <PageWrapper>
      <div>
        <PageHeader title="Projects" />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <h2 className="text-2xl xl:mt-8 font-jua">Business Work</h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">work</p>
            </div>
            <div className="w-full xl:max-w-[65%]">
              <WorkSlider />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
