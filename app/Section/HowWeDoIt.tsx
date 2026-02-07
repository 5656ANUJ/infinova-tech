"use client";
import React from "react";
import GlassContainer from "../Components/GlassContainer";
import PrimaryButton from "../Components/borderBtn";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassContainerInput } from "../data";

export default function HowWeDoIt() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
    <section className="min-h-screen text-white px-5 md:px-10 lg:px-16 py-12 md:py-20 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start w-full relative z-10">
        {/* Left Content Section - Sticky & Parallax */}
        <motion.div
          style={{ y }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 w-full md:w-1/2 md:sticky md:top-32"
        >
          <motion.h4
            variants={itemVariants}
            className="text-gray-400 font-medium uppercase tracking-widest text-sm"
          >
            How we do
          </motion.h4>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold capitalize leading-tight tracking-tight"
          >
            Our proven path to digital transformation
          </motion.h1>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="pt-4"
          >
            <PrimaryButton text="Start Your Journey" />
          </motion.div>
        </motion.div>

        {/* Right Timeline/Cards Section */}
        <motion.div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
          {GlassContainerInput.map((item, index) => (
            <React.Fragment key={index}>
              <GlassContainer
                title={item.title}
                description={item.description}
                index={index + 1}
              />

              {/* JOINING LINE */}
              {index !== GlassContainerInput.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-[1px] bg-gradient-to-b from-white/40 to-transparent ml-[26px] md:ml-[42px] my-1"
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
