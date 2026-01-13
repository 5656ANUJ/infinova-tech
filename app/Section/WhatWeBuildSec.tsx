"use client";
import WhatWeBuildCard from "../Components/WhatWeBuildcard";
import { motion } from "framer-motion";

export default function WhatWeBuildSec() {
  const WhatWeBuildInput = [
    {
      title: "Corporate Website",
      description:
        "Professional, responsive websites that build brand credibility, communicate your message, and generate leads.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "E-Commerce",
      description:
        "Scalable online stores with seamless checkout experiences to maximize code-driven sales.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Custom Web Apps",
      description:
        "Tailored web applications designed to streamline operations and enhance user engagement.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
  ];

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
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
      },
    },
  };

  return (
    <div className="w-full px-5 md:px-10 lg:px-16 mt-16 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center gap-6 mb-12"
      >
        <h1 className="text-white font-['Sora'] text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight capitalize text-center">
          What we build
        </h1>
        <p className="text-gray-300 font-['Sora'] text-sm md:text-lg lg:text-xl font-normal leading-relaxed text-center max-w-3xl">
          We specialize in a wide range of web development services tailored to
          your business needs.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8"
      >
        {WhatWeBuildInput.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full flex justify-center"
          >
            <WhatWeBuildCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
