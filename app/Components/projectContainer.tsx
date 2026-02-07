"use client";
import WhiteBtn from "./GlowBtn";
import { motion } from "framer-motion";

interface ProjectData {
  title: string;
  description: string;
  images: string[];
}

export default function ProjectContainer({
  project,
}: {
  project: ProjectData;
}) {
  const images = project.images || [];

  return (
    /* The 'relative' class here defines the boundaries for the sticky text */
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-4 mb-20 w-full rounded-2xl">
      {/* 1. STICKY TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:sticky md:top-24 self-start w-full h-auto flex flex-col justify-center z-10"
      >
        <h1 className="text-white font-['Sora'] text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight capitalize mb-4">
          {project.title}
        </h1>
        <p className="text-gray-200 font-['McLaren'] text-sm md:text-lg lg:text-xl font-normal leading-relaxed text-justify md:text-left mb-6">
          {project.description}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-start">
          <WhiteBtn text="--Live--" />
        </motion.div>
      </motion.div>

      {/* 2. SCROLLING IMAGES COLUMN */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {/* Top Image */}
        {images[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-64 md:h-80 rounded-xl border border-white/20 overflow-hidden shadow-lg"
          >
            <img
              src={images[0]}
              alt={`${project.title} 1`}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        )}

        {/* Middle Image */}
        {images[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full h-64 md:h-80 rounded-xl border border-white/20 overflow-hidden shadow-lg"
          >
            <img
              src={images[1]}
              alt={`${project.title} 2`}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        )}

        {/* Bottom Left Image Style */}
        {images[2] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-64 md:h-80 rounded-xl border border-white/20 overflow-hidden shadow-lg"
          >
            <img
              src={images[2]}
              alt={`${project.title} 3`}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        )}

        {/* Tall Double Image Style */}
        {(images[3] || images[4]) && (
          <div className="flex w-full h-64 md:h-80 rounded-xl border border-white/20 flex-row justify-between gap-4 overflow-hidden shadow-lg bg-black/20">
            {images[3] && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full overflow-hidden"
              >
                <img
                  src={images[3]}
                  alt={`${project.title} 4`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            )}
            {images[4] && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full overflow-hidden"
              >
                <img
                  src={images[4]}
                  alt={`${project.title} 5`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
