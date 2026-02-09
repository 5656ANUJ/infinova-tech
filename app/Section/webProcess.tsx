"use client";
import { motion } from "framer-motion";
import Process from "../Components/Process";
import { WebProcessSteps } from "../data";
import SectionHeading from "../Components/SectionHeading";

export default function WebProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full px-5 md:px-10 lg:px-16"
    >
      <section className="mt-10 translate-y-10"><SectionHeading
        title="Our Design Process"
        subtitle="A Proven Path to Exceptional UI"
        description="We follow a structured, collaborative process to ensure every design aligns with your vision and resonates with your users."
        /></section>
      <section className="mt-5 w-full -translate-y-10">
        <Process services={WebProcessSteps} />
      </section>
    </motion.div>
  );
}
