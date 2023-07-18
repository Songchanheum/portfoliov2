"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "../../components/NavBar";
import TopNavBar from "../../components/TopNavBar";
import { motion } from "framer-motion";

export const Header = () => {
  const pathName = usePathname();
  const isMain = pathName === "/main";
  return (
    <header className="sticky top-0 z-50">
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
