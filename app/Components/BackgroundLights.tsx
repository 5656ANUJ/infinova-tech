"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundLights = () => {
  // Use state to handle hydration mismatch (only render on client)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Light 1 - Top Leftish - Strong Blue/Purple */}
      <motion.div
        className="absolute -top-37.5 -left-37.5 w-150 h-150 rounded-full blur-[80px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(147,51,234,0.3) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light 2 - Bottom Rightish - Purple/Pink */}
      <motion.div
        className="absolute -bottom-50 -right-25 w-175 h-175 rounded-full blur-[90px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.5) 0%, rgba(236,72,153,0.3) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light 3 - Top Rightish - Indigo */}
      <motion.div
        className="absolute -top-50 -right-50 w-125 h-125 rounded-full blur-[80px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(168,85,247,0.3) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light 4 - Center/Bottom Leftish - Cyan/Blue */}
      <motion.div
        className="absolute bottom-[10%] -left-25 w-125 h-125 rounded-full blur-[80px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BackgroundLights;
