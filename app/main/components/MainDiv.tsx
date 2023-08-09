"use client";
import React, { useRef, useState } from "react";

import MainImg from "@/app/main/components/MainImg";
import { motion } from "framer-motion";
import ChatModal from "@/app/main/components/ChatModal";
import SocialAccount from "@/common/SocialAccount";

const MainDiv = () => {
  const scrollRef = useRef<HTMLTableSectionElement>(null);
  const [show1, setShow] = useState<boolean>(false);

  const scrollToBottom: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MainImg scroll={scrollToBottom} />
      <section
        ref={scrollRef}
        className="w-full bg-gradient-to-b from-white via-white to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-violet-800"
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          className="w-full grid place-items-center"
        >
          <button
            onClick={() => setShow(!show1)}
            className="w-44 h-16 border-none rounded-full font-jua bg-orange-200 dark:bg-violet-600"
          >
            Contact Me!
          </button>
        </motion.div>
        {show1 ? (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="absolute top-40 w-full h-[80%] md:top-[20%] md:h-[600px] md:w-1/2 md:min-w-[720px] lg:min-w-[960px] bg-violet-100 dark:bg-gray-700 rounded-xl flex flex-col md:flex-row md:justify-between items-center align-top z-[99]"
          >
            <div className="inline-block md:border-r-2 lg:border-gray-100 md:w-1/3 w-full h-[15%] md:h-full">
              <motion.span
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block absolute top-5 w-full md:w-1/3 text-center font-jua text-slate-500 dark:text-slate-200"
              >
                Social Accounts
              </motion.span>
              <div className="hidden md:block">
                <SocialAccount type={"v"} />
              </div>
              <div className="flex md:hidden pt-16 justify-center items-center">
                <SocialAccount type={"h"} />
              </div>
            </div>
            <div className="inline-block w-full h-[85%] md:w-2/3 md:h-full md:pt-10 pt-2 pb-2">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="w-[90%] h-full mx-auto"
              >
                <ChatModal isOpen={show1} />
              </motion.div>
            </div>
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-5 font-jua text-violet-400 hover:text-violet-800 dark:hover:text-violet-50 hover:cursor-pointer"
            >
              X
            </button>
          </motion.div>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default MainDiv;
