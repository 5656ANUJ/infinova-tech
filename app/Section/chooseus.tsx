"use client";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../Components/ServiceCard";

interface Service {
  title: string;
  description: string;
  useCases: string;
}

interface ChooseUsProps {
  services: Service[];
}

const ChooseUs = ({ services }: ChooseUsProps) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1A0033] to-[#120033] text-white min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-7xl  mx-auto text-center space-y-16 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          className="text-8xl sm:text-5xl  lg:text-6xl font-black  bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Services
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-full "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
