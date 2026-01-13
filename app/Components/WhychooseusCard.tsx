"use client";
import { motion } from "framer-motion";

export default function WhychooseusCard({
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
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
      flex flex-col w-full max-w-xs h-auto justify-center items-center gap-2 md:gap-4 rounded-[20px] backdrop-blur-md p-4
      cursor-pointer"
    >
      <motion.img
        whileHover={{ rotate: 10, scale: 1.1 }}
        src={icon}
        alt={title}
        className="w-12 h-12 md:w-20 md:h-20 object-contain"
      />
      <h1 className="text-base md:text-2xl font-bold text-center text-white tracking-tight">
        {title}
      </h1>
      <p className="text-xs md:text-base font-normal text-center text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
