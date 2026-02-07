"use client";
import PrimaryButton from "../Components/borderBtn";
import GlowButton from "../Components/GlowBtn";
import { motion } from "framer-motion";

export default function CTAsec() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center items-start text-left md:flex-row gap-6 md:gap-10 px-5 md:px-10 lg:px-16 w-full max-w-7xl mx-auto"
    >
      <div className="flex-1">
        <h1 className="text-white font-['Sora'] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight capitalize">
          Ready to Transform your Digital landscape?
        </h1>
      </div>

      <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/10 via-white/50 to-white/10"></div>

      <div className="flex flex-col gap-6 flex-1">
        <p className="text-gray-300 font-['Roboto'] text-sm md:text-base lg:text-lg font-normal leading-relaxed">
          Let's discuss how our innovative solutions can drive your business
          forward.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4"
        >
          <GlowButton text="Get quote" />
          <PrimaryButton text="Contact Us" />
        </motion.div>
      </div>
    </motion.section>
  );
}
