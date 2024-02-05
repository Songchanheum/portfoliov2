"use client";
import { motion } from "framer-motion";
import { NavBar, TopNavBar } from "./NavBar";
import { usePathname } from "next/navigation";
export const Header = () => {
  const pathName = usePathname();
  const isMain = pathName === "/main";
  return (
    <header className="fixed w-screen top-0 z-[90]">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={
          isMain
            ? ""
            : {
                opacity: 1,
                y: "0%",
                transition: {
                  delay: 1.2,
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                },
              }
        }
      >
        <TopNavBar />
      </motion.div>
      <motion.div
        initial={{ y: -88 }}
        animate={
          isMain
            ? ""
            : {
                y: 0,
                transition: {
                  delay: 1.2,
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                },
              }
        }
        exit={{
          y: -88,
          transition: { delay: 1, duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        }}
        transition={isMain ? {} : { delay: 1 }}
      >
        <NavBar />
      </motion.div>
    </header>
  );
};
