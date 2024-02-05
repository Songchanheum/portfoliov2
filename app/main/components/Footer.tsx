"use client";
import { ChatIcon } from "@/common/utils/Icons";
import { motion } from "framer-motion";
import { useState } from "react";
import ChatModal from "./ChatModal";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const [show, setShow] = useState<boolean>(false);
  const pathName = usePathname();
  const isMain = pathName === "/main";
  return (
    <footer>
      <div className="fixed bottom-3 xl:bottom-12 z-[90] w-full flex justify-end">
        <motion.button
          initial={{ opacity: 0, scale: 4, y: 80 }}
          animate={isMain ? "" : { opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`bg-violet-300 w-10 h-10 rounded-xl grid place-items-center hover:cursor-pointer hover:bg-violet-500 me-3 xl:me-32${
            isMain ? "" : " animate-pulse hover:animate-none"
          }`}
          onClick={() => setShow(!show)}
        >
          <ChatIcon size="30" fill="white" />
        </motion.button>
        {show && !isMain ? (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="absolute bottom-11 right-3 sm:right-10 xl:right-40 h-[80vh] sm:h-[600px] w-[90%] sm:w-[500px] flex justify-between items-center align-top"
          >
            <div className="inline-block w-full h-full py-2 bg-violet-100 dark:bg-gray-700 rounded-2xl rounded-br-none opacity-100 sm:opacity-40 sm:hover:opacity-100 transition-opacity">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-[90%] h-full m-auto"
              >
                <ChatModal isOpen={show} />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full bg-gradient-to-b to-orange-100 via-white from-white dark:via-slate-900 dark:from-slate-900 dark:to-violet-900 h-44">
        <div className="mt-10 flex justify-center items-center">
          <div>
            <span className="text-gray-800 dark:text-gray-300 text-sm font-d2 z-50 me-5">
              Made By Chanheum Song <br />
              Made with Nextjs TailwindCSS Framer-motion.
            </span>
            <ul className="mt-2 space-y-2 font-jua text-xs font-extralight text-gray-600 dark:text-gray-400">
              <li>{`취미 : 개발, 야구`}</li>
              <li>{`특기 : 만들기(가죽공예, 베이킹 등등)`}</li>
              <li>{`특이사항 : 한화이글스 팬(19년차), 취준생 기간 없음(이직 2회)`}</li>
              <li>{`참고 : Indiegogo 사기 당한 횟수 1회 (F(x)tec Pro 1x)`}</li>
            </ul>
          </div>
          <div className="absolute right-5 z-[95]">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
