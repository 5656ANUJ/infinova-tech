"use client";
import { motion } from "framer-motion";

export default function WhatWeBuildCard({
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
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 0 20px 2px rgba(255,255,255,0.4), 0 -7px 25px -8px #FFF",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        flex flex-col w-full max-w-sm h-auto p-6 md:p-8 lg:p-10 justify-center items-center gap-4
        rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20
        shadow-[0_0_10px_0px_rgba(255,255,255,0.3),0_-5px_20px_-10px_#FFF]
        cursor-pointer
      "
    >
      <motion.img
        whileHover={{ rotate: 10, scale: 1.1 }}
        src={icon}
        alt={title}
        className="w-20 h-20 object-contain"
      />
      <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
        {title}
      </h1>
      <p className="text-sm md:text-base font-normal text-center text-gray-200 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
