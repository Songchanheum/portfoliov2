"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

function Experience({ text, num }: { text: string; num: string }) {
  return (
    <div className="w-1/3 grid place-items-center">
      <span className="text-6xl font-bold mb-5">{num}+</span>
      <span className="font-jua"> {text}</span>
    </div>
  );
}

export default function page() {
  // const myPic = "";
  const myPic = "/images/introduce/mypic.png";
  return (
    <PageWrapper>
      <div>
        <PageHeader title="Introduce" />
        <div className="flex mb-10">
          <div className="w-2/3 font-d2"> 소개페이지 입니다. </div>
          <div className="w-1/3 p-4">
            <div className="border-2 border-black border-r-8 border-b-8 rounded-2xl h-fit p-8">
              <img
                src={myPic}
                alt="alt"
                className="w-[80%] m-auto h-auto rounded-2xl bg-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex hover:text-orange-400 transition-colors duration-500">
          <Experience text="Year Of Experience" num="7" />
          <Experience text="Projects Completed" num="20" />
          <Experience text="Dev Toy Project" num="10" />
        </div>
      </div>
    </PageWrapper>
  );
}
