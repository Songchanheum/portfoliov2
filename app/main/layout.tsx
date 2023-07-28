"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChatIcon } from "@/components/utils/Icons";
import ChatModal from "@/components/ChatModal";
import { NavBar, TopNavBar } from "@/components/NavBar";

export const Header = ({ isMain }: { isMain: boolean }) => {
  return (
    <header className="fixed w-full top-0 z-50">
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
    <footer className="fixed bottom-12 right-32 z-50">
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
          className="absolute bottom-10 right-10 h-[600px] w-[500px] flex justify-between items-center align-top"
        >
          <div className="inline-block w-full h-full py-2 bg-violet-100 rounded-2xl rounded-br-none opacity-40 hover:opacity-100 transition-opacity">
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isMain = pathName === "/main";
  return (
    <html lang="en">
      <body>
        <Header isMain={isMain} />
        {children}
        <Footer isMain={isMain} />
      </body>
    </html>
  );
}
