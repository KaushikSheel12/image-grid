import { item } from "@/framer";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Card = ({ imgLink }: { imgLink: string }) => {
  return (
    <motion.div
      variants={item}
      className="relative w-full h-[218px]  bg-[#F6F6F6] border cursor-pointer overflow-hidden"
    >
      <Image
        src={imgLink}
        fill
        className="object-contain transform hover:scale-[1.1] transition-all ease-linear -mt-[21px]"
        alt="shoe "
        loading="lazy"
        quality={75}
      />
      <div className="absolute w-full bottom-1 left-2 leading-[.9]">
        <p className="text-black uppercase text-[10px]">the roger advantage</p>
        <p className="text-black text-lg font-medium">White | Green</p>
      </div>
    </motion.div>
  );
};
