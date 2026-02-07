"use client";
import AIAutoCard from "../Components/AIAutoCard";
import { motion } from "framer-motion";
import {WhyAidata} from "../data";

export default function WhyAi() {
  

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 px-5 md:px-10 lg:px-16 mt-16 md:mt-24 mb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <h1 className="text-white font-['Sora'] text-2xl md:text-3xl lg:text-4xl font-semibold capitalize leading-tight text-center">
          Why Choose AI Automation?
        </h1>
        <p className="text-gray-300 text-center font-['McLaren'] text-sm md:text-base lg:text-xl font-normal leading-relaxed max-w-3xl">
          Leverage the power of AI to transform your business operations and
          achieve remarkable outcomes.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full max-w-7xl"
      >
        {WhyAidata.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full flex justify-center"
          >
            <AIAutoCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
