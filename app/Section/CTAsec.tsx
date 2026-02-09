"use client";
import PrimaryButton from "../Components/borderBtn";
import GlowButton from "../Components/GlowBtn";
import { motion } from "framer-motion";

export default function CTAsec() {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-center items-start text-left md:flex-row gap-6 md:gap-10 px-5 md:px-10 lg:px-16 w-full max-w-7xl mx-auto mt-10 mb-10"
    >
      <div className="flex-1">
        <motion.h1
          variants={itemVariants}
          className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight capitalize"
        >
          Ready to Transform your Digital landscape?
        </motion.h1>
      </div>

      <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/10 via-white/50 to-white/10"></div>

      <div className="flex flex-col gap-6 flex-1">
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-sm md:text-base lg:text-lg font-normal leading-relaxed"
        >
          Let's discuss how our innovative solutions can drive your business
          forward.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4">
          <GlowButton text="Get quote" />
          <PrimaryButton text="Contact Us" />
        </motion.div>
      </div>
    </motion.section>
  );
}
