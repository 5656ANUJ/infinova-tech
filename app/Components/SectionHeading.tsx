"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div
      className={`w-full mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-400 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider mb-2"
      >
        {title}
      </motion.h3>
      {subtitle && (
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-white"
        >
          {subtitle}
        </motion.h1>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`text-lg md:text-lg text-gray-300 ${align === "center" ? "mx-auto" : ""} max-w-2xl leading-relaxed`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
