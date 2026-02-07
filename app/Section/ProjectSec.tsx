"use client";
import ProjectContainer from "../Components/projectContainer";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function ProjectSec() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20 mb-20 px-5 md:px-10 lg:px-16"
    >
      <div className="flex flex-col gap-2 mb-10 w-full max-w-7xl mx-auto">
        <motion.h4
          variants={itemVariants}
          className="text-blue-400 text-sm md:text-base uppercase tracking-widest font-medium"
        >
          Case Studies
        </motion.h4>
        <motion.h1
          variants={itemVariants}
          className="text-white text-3xl md:text-5xl font-bold leading-tight capitalize"
        >
          Project Showcase
        </motion.h1>
      </div>

      {/* Scrollable Parent Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center
          w-full max-w-7xl mx-auto
          min-h-[600px]
          p-5 md:p-10
          rounded-[30px] 
          bg-[#120131] 
          shadow-[0_0_20px_5px_rgba(255,255,255,0.1),0_0_60px_10px_rgba(0,23,255,0.3)]
          border border-white/10"
      >
        <div className="w-full space-y-20">
          {projects.map((proj, index) => (
            <ProjectContainer key={index} project={proj} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
