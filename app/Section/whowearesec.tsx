"use client";
import PrimaryButton from "../Components/borderBtn";
import { motion } from "framer-motion";

export default function Whoweare() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full px-5 md:px-10 lg:px-16"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider font-['Inter']"
      >
        Who We Are
      </motion.h3>

      <h1 className="text-white text-center font-['Sora'] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize max-w-4xl">
        Innovative Technology Meets{" "}
        <span className="text-blue-500">Human Creativity</span>
      </h1>

      <p className="text-gray-300 text-center font-['McLaren'] text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl">
        Infinova Technologies is a future-focused innovation company operating
        at the intersection of IT, automation, and advanced engineering —
        partnering with industries and visionaries to build what’s next in
        robotics, 3D manufacturing, EVs, and space technologies.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <PrimaryButton text="Learn More" variant="outline" />
      </motion.div>
    </motion.div>
  );
}
