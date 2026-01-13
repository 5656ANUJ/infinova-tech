"use client";
import WhatwedesignCard from "../Components/WhatwedesignCard";
import { motion } from "framer-motion";

export default function WhatWeDesignSec() {
  const whatWeDesignData = [
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50 },
    },
  };

  return (
    <section className="w-full flex flex-col items-center text-center mt-10 md:mt-20 px-5 md:px-10 lg:px-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          What We Design
        </h1>

        <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-500">
          We craft visually consistent, bold and thoughtful graphics tailored to
          your brand.
        </p>
      </motion.div>

      {/* Cards Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="
          /* Mobile: Horizontal Scroll */
          flex gap-5 w-full overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 px-1
          
          /* Tablet & Desktop: Grid */
          md:grid md:overflow-visible md:w-full md:mx-auto md:gap-8
          md:grid-cols-2 lg:grid-cols-3
        "
      >
        {whatWeDesignData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="
              shrink-0 snap-center
              w-[280px] sm:w-[320px]
              md:w-auto md:shrink md:snap-none
              flex justify-center
            "
          >
            <WhatwedesignCard title={item.title} image={item.image} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
