"use client";
import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  use,
  useEffect,
} from "react";

import MainImg from "@/app/main/components/MainImg";
import { motion } from "framer-motion";
import ChatModal from "@/app/main/components/ChatModal";
import SocialAccount from "@/common/SocialAccount";

async function getUser() {
  const res = await fetch("http://localhost:5001/api/user", {
    cache: "no-store",
  });
  return res.json();
}

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
        className="w-full bg-gradient-to-b from-white via-white to-orange-100"
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          className="w-full grid place-items-center"
        >
          <button
            onClick={() => setShow(!show1)}
            className="w-44 h-16 border-none rounded-full font-jua bg-orange-200"
          >
            Contact Me!
          </button>
        </motion.div>
        {show1 ? (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="absolute top-[20%] h-[600px] w-1/2 min-w-[960px] bg-violet-100 rounded-xl flex justify-between items-center align-top"
          >
            <div className="inline-block border-r-2 border-gray-100 w-1/3 h-full">
              <motion.span
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block absolute top-5 w-1/3 text-center font-jua text-slate-500"
              >
                Social Accounts
              </motion.span>
              <div>
                <SocialAccount type={"v"} />
              </div>
            </div>
            <div className="inline-block w-2/3 h-full pt-10 pb-2">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="w-[90%] h-full mx-auto"
              >
                <ChatModal isOpen={show1} />
              </motion.div>
            </div>
            <button
              onClick={() => setShow(false)}
              className="absolute top-3 right-5 font-jua text-violet-400 hover:text-violet-800 hover:cursor-pointer"
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
