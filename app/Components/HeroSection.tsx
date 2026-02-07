"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  badges?: string[];
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Web Development",
  subtitle = "Website For Startups",
  description = "From sleek corporate sites to e-commerce platforms, we build fast, secure, and scalable solutions that drive growth and deliver exceptional user experiences.",
  ctaText = "Explore",
  ctaLink = "/",
  imageSrc = "/hero.svg",
  badges = ["React", "Next.js", "Node.js"],
  reverse = false,
}) => {
  return (
    <section className="min-h-screen  w-full relative overflow-hidden ">
      {/* Animated background */}
      <div className="absolute  inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-black/90" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce [animation-delay:1s]" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400/60 rounded-full animate-ping [animation-delay:0.5s]" />
      </div>

      <div className="relative  z-10 h-screen flex items-center justify-between px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          className={`flex-1 ${reverse ? "order-2" : "order-1"}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 "
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-widest leading-[0.85] bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 mt-4 rounded-full" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mt-4 uppercase tracking-wide">
              {subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-200/90 leading-relaxed max-w-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8"
          >
            <a
              href={ctaLink}
              className="
                inline-flex items-center
                px-10 py-5
                bg-gradient-to-r from-purple-600 to-blue-600
                hover:from-purple-500 hover:to-blue-500
                text-xl font-bold uppercase
                rounded-3xl
                backdrop-blur-xl
                border border-white/20
                shadow-2xl shadow-purple-500/50
                hover:shadow-3xl hover:shadow-purple-500/70
                transition-all duration-300
              "
            >
              {ctaText}
              <span className="ml-3 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                →
              </span>
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="
                  px-4 py-2
                  bg-white/10 backdrop-blur-sm
                  rounded-full border border-white/30
                  text-sm font-semibold
                  hover:bg-white/20
                  transition-all duration-300
                "
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className={`flex-1  flex justify-center ${reverse ? "order-1" : "order-2"}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative  w-full max-w-2xl h-fit   sm:h-[600px] lg:h-[800px]">
            {/* 3D Character Image */}
            <Image
              src={imageSrc}
              alt={`${title} illustration`}
              fill
              className="
                object-contain
                rounded-3xl
                shadow-2xl shadow-black/50
                animate-float 
              "
              priority
            />

            {/* Floating badges around image */}
            <motion.div
              className="absolute  top-10 -right-12 w-20 h-20 bg-green-500"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="/LinkedIn.svg"
                alt=""
                className="h-fit w-fit bg-green-500 z-20"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-20 -left-8 w-16 h-16"
              animate={{
                rotate: [0, -15, 15, 0],
                y: [0, 10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="w-14 h-14  rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom floating animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
