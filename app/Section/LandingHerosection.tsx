"use client";
import PrimaryButton from "../Components/borderBtn";
import WhiteBtn from "../Components/GlowBtn";
import { motion } from "framer-motion";

export default function LandingHerosection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-center gap-10 w-full relative z-10"
    >
      <motion.div className="flex flex-col items-center gap-10">
        <motion.h1
          variants={itemVariants}
          className="text-white text-center text-[28px] md:text-[65px] lg:text-[80px] font-bold leading-[110%] capitalize max-w-5xl"
        >
          Transform your digital potential with precision
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-center text-sm md:text-xl lg:text-[18px] font-normal leading-relaxed capitalize px-3 md:px-10 lg:px-20 max-w-4xl"
        >
          We craft innovative technological solutions that drive business
          performance.
          <br className="hidden md:block" />
          Our team turns complex challenges into streamlined digital
          experiences.
        </motion.p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex flex-row gap-3 md:gap-5 lg:gap-8"
      >
        <div className="hover:scale-105 transition-transform duration-300">
          <WhiteBtn text="Start Project" />
        </div>
        <div className="hover:scale-105 transition-transform duration-300">
          <PrimaryButton text="Learn More" variant="outline" />
        </div>
      </motion.div>
    </motion.div>
  );
}
