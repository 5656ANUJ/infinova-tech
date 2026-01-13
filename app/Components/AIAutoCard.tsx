"use client";
import { motion } from "framer-motion";

export default function AIAutoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#8c6dfd" }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-center items-center gap-4 p-5 md:py-6 w-full max-w-sm rounded-[12px] border-[3px] border-[#683FFF] bg-[#683FFF]/5 backdrop-blur-sm cursor-pointer"
    >
      <div className="flex flex-row justify-center items-center gap-4 px-2 w-full">
        <motion.img
          whileHover={{ rotate: 10 }}
          src={icon}
          alt={title}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
        />
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white leading-tight">
          {title}
        </h1>
      </div>
      <div className="w-full">
        <p className="text-center text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed px-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
