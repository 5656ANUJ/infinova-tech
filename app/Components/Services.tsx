"use client";
import { useState } from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const Services = ({
  title = "Our Services",
  subtitle = "Comprehensive solutions tailored to your business needs",
  services = [],
}: ServicesSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full text-white overflow-hidden py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-400 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider mb-2"
        >
          Our Capabilities
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4"
        >
          Digital Solutions That Power Modern Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          We engineer breakthrough technologies that transform how companies
          operate and compete in the digital landscape.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServicesCard
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                title={service.title}
                description={service.description}
                image={service.image}
                isLeft={index % 2 === 0}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
