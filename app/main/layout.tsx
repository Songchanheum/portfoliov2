"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChatIcon } from "@/common/utils/Icons";
import ChatModal from "@/app/main/components/ChatModal";
import { NavBar, TopNavBar } from "@/app/main/components/NavBar";
import Providers from "./components/theme/Provider";

export const Header = ({ isMain }: { isMain: boolean }) => {
  return (
    <header className="fixed w-screen top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMain ? "" : { opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <TopNavBar />
      </motion.div>
      <motion.div
        initial={{ y: -88 }}
        animate={isMain ? "" : { y: 0 }}
        exit={{ y: -88 }}
      >
        <NavBar />
      </motion.div>
    </header>
  );
};
export const Footer = ({ isMain }: { isMain: boolean }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <footer className="fixed bottom-3 xl:bottom-12 right-3 xl:right-32 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 4, y: 80 }}
        animate={isMain ? "" : { opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className={`bg-violet-300 w-10 h-10 rounded-xl grid place-items-center hover:cursor-pointer hover:bg-violet-500 ${
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
          className="absolute bottom-11 right-0 sm:right-10 h-[90vh] sm:h-[600px] w-[450px] sm:w-[500px] flex justify-between items-center align-top"
        >
          <div className="inline-block w-full h-full py-2 bg-violet-100 dark:bg-violet-950 rounded-2xl rounded-br-none opacity-100 sm:opacity-40 sm:hover:opacity-100 transition-opacity">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-[90%] h-full mx-auto"
            >
              <ChatModal isOpen={show} />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </footer>
  );
};
function BgImg() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-[-99]">
      <div className="bg-gradient-to-r from-white via-orange-200 to-orange-100 dark:from-slate-900 dark:via-violet-100 dark:to-violet-950 opacity-40 w-full h-full absolute top-0 left-0 "></div>
      <div className="bg-gradient-to-b from-white via-transparent to-white dark:from-slate-900 dark:to-slate-900 z-[1] w-full h-full absolute top-0 left-0"></div>
    </div>
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isMain = pathName === "/main";
  return (
    <html lang="ko">
      <body className="bg-white dark:bg-slate-900">
        <Providers>
          <BgImg />
          <AnimatePresence mode="wait">
            <Header isMain={isMain} />
            {children}
            <Footer isMain={isMain} />
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  );
}
