"use client";
import WhychooseusCard from "../Components/WhychooseusCard";
import { motion } from "framer-motion";

export default function WhyChooseUsSec() {
  const WhychooseusData = [
    {
      title: "Saves Your Time",
      description: "We handle content while you focus on your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Expert Support",
      description:
        "Our team is always ready to assist you with any technical needs.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Scalable Solutions",
      description: "Future-proof architectures that grow with your business.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Cost Effective",
      description: "Top-tier quality without breaking the bank.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security standards for all projects.",
      icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-10 lg:px-16 mt-20 mb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-['Sora'] font-bold text-white tracking-tight mb-12 text-center"
      >
        Why Choose Us
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl"
      >
        {WhychooseusData.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <WhychooseusCard
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
