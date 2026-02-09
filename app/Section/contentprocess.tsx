"use client";
import { motion } from "framer-motion";
import Process from "../Components/Process";
import { ContentResearchProcessSteps } from "../data";
import SectionHeading from "../Components/SectionHeading";

export default function ContentResearchProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full px-5 md:px-10 lg:px-16 mt-32"
    >
      <section className="mt-10 translate-y-10">
        <SectionHeading
        title="Our Content Research Process"
        subtitle="A Proven Path to Exceptional Content Research"
        description="we follow content research process to ensure every design aligns with your vision and resonates with your users."
        />
      </section>
      <section className="w-full">
        <Process services={ContentResearchProcessSteps} />
      </section>
    </motion.div>
  );
}
