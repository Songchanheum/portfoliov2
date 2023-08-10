"use client";
import PageHeader from "@/app/main/components/PageHeader";
import PageWrapper from "@/common/PageWrapper";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import {
  RxArrowTopRight,
  RxDesktop,
  RxLayers,
  RxGlobe,
  RxGear,
} from "react-icons/rx";

import { BsArrowRight } from "react-icons/bs";
import { PROJECT, WORK } from "./constants";
import Image from "next/image";

const WorkSlider = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  function Icon({ icon }: { icon: string }) {
    if (icon === "dev") return <RxDesktop />;
    else if (icon === "system") return <RxLayers />;
    else if (icon === "html") return <RxGlobe />;
    else if (icon === "setting") return <RxGear />;
    else null;
  }
  return (
    <div className="h-fit">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          720: { slidesPerView: 3, spaceBetween: 15 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-[240px] sm:h-[340px]"
      >
        {WORK.map((e, i) => {
          return (
            <SwiperSlide key={e.title + i}>
              <div className="bg-white font-d2 dark:bg-slate-800 opacity-90 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:opacity-100 transition-all duration-300">
                <div className="text-4xl text-red-600 mb-8">
                  <Icon icon={e.icon} />
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
      <div className="autoplay-progress !relative right-5 bottom-0 w-12 h-12 !flex float-right !items-center !justify-center !font-bold">
        <svg
          viewBox="0 0 48 48"
          ref={progressCircle}
          className="absolute top-0 left-0 w-full h-full stroke-[4px] dark:stroke-violet-400 stroke-orange-300 fill-none transform -rotate-90"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeDasharray={125.6}
            strokeDashoffset={`calc(125.6 * (1 - var(--progress)))`}
          ></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </div>
  );
};
const ProjectSlider = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <div className="h-fit">
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-[350px] sm:h-[420px] md:h-[500px] lg:h-[700px] xl:h-[550px]"
      >
        {PROJECT.slide.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {e.images.map((image, index) => {
                  return (
                    <div
                      key={image.title + index}
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden">
                        <Image
                          src={image.src}
                          width={500}
                          height={300}
                          alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pink-400 to-violet-600 opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                          <div className="flex items-center justify-center gap-x-2">
                            <div>{image.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="autoplay-progress !relative right-5 bottom-0 z-[99] w-12 h-12 !flex float-right !items-center !justify-center !font-bold">
        <svg
          viewBox="0 0 48 48"
          ref={progressCircle}
          className="absolute top-0 left-0 z-[99] w-full h-full stroke-[4px] dark:stroke-violet-400 stroke-orange-300 fill-none transform -rotate-90"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeDasharray={125.6}
            strokeDashoffset={`calc(125.6 * (1 - var(--progress)))`}
          ></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </div>
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
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 font-do font-extralight text-gray-700 dark:text-gray-300">
                경력 사항중 진행한 프로젝트로 F/E B/E 개발, 시스템 구축, 디자인,
                UI/UX 서비스 진행 내역입니다.
              </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
              <WorkSlider />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-16">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <h2 className="text-2xl xl:mt-8 font-jua">Toy Project</h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 font-do font-extralight text-gray-700 dark:text-gray-300">
                개인적으로 진행한 토이프로젝트 내역입니다. 개인 학습, 역량
                강화를 목적으로 진행한 프로젝트입니다.
              </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
              <ProjectSlider />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
