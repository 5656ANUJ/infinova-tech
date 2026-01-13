"use client";
import { motion } from "framer-motion";

interface WhatwedesignCardProps {
  image: string;
  title: string;
}

export default function WhatwedesignCard({
  image,
  title,
}: WhatwedesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex w-full max-w-[300px] p-3 md:p-5 flex-col items-center gap-3 md:gap-5 rounded-[20px] bg-[#3E6FFF] shadow-lg cursor-pointer"
    >
      <div className="w-full overflow-hidden rounded-[20px]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={image}
          alt={title}
          className="w-full h-44 md:h-52 lg:h-60 object-cover"
        />
      </div>

      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-white px-2">
        {title}
      </h1>
    </motion.div>
  );
}
