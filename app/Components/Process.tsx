"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
}

interface ProcessProps {
  services?: Service[];
}

const Process = ({ services = [] }: ProcessProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full text-white overflow-hidden py-20 px-6">
      {/* Header */}
      {/* <SectionHeading title={title} subtitle={subtitle} /> */}

      {/* Services Grid */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // 1,3,5... (0-indexed even positions)

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  ${isEven ? "lg:flex-row-reverse" : ""}
                  relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 lg:px-0
                `}
              >
                {/* Number Badge */}
                <div
                  className={`
                    flex flex-shrink-0 w-12 h-12 lg:w-20 lg:h-20
                    items-center justify-center 
                    rounded-full bg-[#4F00DF] 
                    text-white font-semibold text-xl lg:text-3xl shadow-2xl
                    ring-4 ring-[#4F46E5]/30 lg:ring-8 lg:ring-[#4F46E5]/20
                    z-10
                  `}
                >
                  {index + 1}
                </div>

                {/* Content Card */}
                <div
                  className={`
                    w-full lg:max-w-2xl h-fit mx-0
                    relative rounded-2xl backdrop-blur-xl border border-white/10
                    bg-white/5
                    p-6 lg:p-8 shadow-xl
                    transition-all duration-500 cursor-pointer
                    hover:scale-[1.02] hover:-translate-y-1
                    before:absolute before:inset-0 before:rounded-2xl
                    before:bg-gradient-to-r before:from-[#4F46E5]/10 before:to-[#7C3AED]/10
                    before:opacity-0 hover:before:opacity-100
                    before:transition-all before:duration-500
                    flex flex-col justify-center items-center text-center gap-3
                  `}
                >
                  <h3 className="text-xl lg:text-3xl grid place-items-center w-full font-bold mb-3 text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-lg grid place-items-center text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
