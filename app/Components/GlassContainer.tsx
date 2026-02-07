"use client";
interface GlassContainerProps {
  title: string;
  description: string;
  index?: number;
}

import { motion } from "framer-motion";

export default function GlassContainer({
  title,
  description,
  index,
}: GlassContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      className="/* Layout & Sizing */
  flex flex-col 
  w-full max-w-[500px] min-h-[120px]
  
  /* Spacing */
  p-5 md:p-8
  gap-2
  
  /* Alignment */
  justify-center items-start
  
  /* Glassmorphism Styles */
  bg-white/10 
  backdrop-blur-md
  rounded-2xl
  border border-white/20
  cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-2">
        {index && (
          <span className="text-[#b9b5ff] font-bold text-xl md:text-4xl">
            {index.toString().padStart(2, "0")}
          </span>
        )}
        <h1 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight tracking-wide">
          {title}
        </h1>
      </div>
      <p className="text-gray-200 text-left text-sm md:text-base font-normal leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
