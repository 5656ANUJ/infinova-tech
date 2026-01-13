"use client";

import { motion } from "framer-motion";

export default function AboutusHeroSec() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center gap-6 mt-16 mb-16 px-5"
    >
      <h1 className="font-['Sora'] text-white text-center font-bold leading-tight text-3xl md:text-5xl lg:text-7xl max-w-5xl">
        About Us
      </h1>
      <h3 className="text-gray-300 text-center font-['McLaren'] font-normal leading-relaxed text-sm md:text-lg lg:text-2xl max-w-4xl">
        Bringing Your Vision to Life with Expertise and Dedication
      </h3>
    </motion.div>
  );
}
