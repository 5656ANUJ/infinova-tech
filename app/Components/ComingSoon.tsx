"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";
import React from "react";

interface ComingSoonProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ComingSoon({
  title,
  description,
  icon,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white p-6 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
          {icon && (
            <div className="relative z-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              {icon}
            </div>
          )}

          {/* Coming Soon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-6 -right-12 bg-[#8A57FF] text-white font-bold px-4 py-1 rounded-full border border-purple-400 shadow-lg rotate-12 whitespace-nowrap"
          >
            Coming Soon
          </motion.div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 drop-shadow-sm">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
          {description}
        </p>

        <Link href="/">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <button className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-2 text-gray-100 pr-6">
                <Home size={20} />
                <span className="font-semibold text-lg">Return Home</span>
              </span>
              <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
                &rarr;
              </span>
            </button>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
