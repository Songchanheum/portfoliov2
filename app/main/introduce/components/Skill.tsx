"use client";
import { motion } from "framer-motion";
type Props = {
  percent?: number;
  src: string;
};
export default function Skill({ percent, src }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          y: -80,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 0.2 }}
        src={src}
        className="rounded-3xl object-cover w-32 h-32 filter group-hover:grayscale"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white tarnsition duration-300 ease-in-out w-32 h-32 rounded-3xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{`${
            percent ?? "100"
          } %`}</p>
        </div>
      </div>
    </div>
  );
}
