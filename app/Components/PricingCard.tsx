"use client";
import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import VioletBtn from "./violetBtn";

interface PricingCardProps {
  title: string;
  price: string;
  features?: string[];
  buttonLabel?: string;
  buttonLink?: string;
  tickMarkSvg?: string;
  arrowSvg?: string;
  isPopular?: boolean;
  onClick?: () => void;
}

export default function PricingCard({
  title,
  price,
  features = [],
  buttonLabel = "Get Started",
  buttonLink = "#",
  tickMarkSvg = "",
  arrowSvg = "",
  isPopular = false,
  onClick,
}: PricingCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Stagger animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`
        group hover:scale-105
        w-full max-w-[400px] h-full
        rounded-3xl lg:rounded-[32px]
        p-6 lg:p-9
        border-4 lg:border-3 border-[#4F46E5]
        bg-[#1A1034] text-white
        relative overflow-hidden
        shadow-[0_0_40px_rgba(118,75,255,0)]
        flex flex-col justify-center gap-6
        ${
          isPopular
            ? " border border-[#683FFF]  bg-white/5 p-20 backdrop-blur-sm  hover:bg-white/10 hover:shadow-2xl hover:shadow-[#4e46e570] transition-all duration-300 cursor-pointer"
            : " border border-[#683FFF] bg-white/5 p-20 backdrop-blur-sm hover:bg-white/10 hover:shadow-2xl hover:shadow-[#4e46e570] transition-all duration-300 cursor-pointer"
        }
      `}
    >
      {isPopular ? (
        <div className="absolute top-8 right-0 md:right-5 -translate-x-1/2 md:translate-x-0 bg-[#683FFF] text-white font-bold px-4 py-1 rounded-full shadow-lg text-sm lg:text-xs">
          Popular
        </div>
      ) : (
        <div className="absolute top-8 right-0 md:right-2 -translate-x-1/2 md:translate-x-0 bg-white/15 text-white font-bold px-4 py-1 rounded-full shadow-lg text-sm lg:text-xs">
          Basic
        </div>
      )}

      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="space-y-3 pt-4 flex-shrink-0"
      >
        <h3 className="text-3xl md:text-4xl lg:text-3xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-4xl md:text-[40px] lg:text-[30px] font-bold text-green-500 leading-tight group-hover:text-3xl transition-all">
          {price}
        </p>
      </motion.div>

      {/* Features List */}
      <motion.div variants={containerVariants} className="flex-1 space-y-4">
        <ul className="space-y-4">
          {features.map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-3 text-lg lg:text-[20px] relative pl-0"
            >
              {tickMarkSvg ? (
                <div
                  className="flex-shrink-0 w-5 h-5 mt-0.5"
                  dangerouslySetInnerHTML={{ __html: tickMarkSvg }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-1 flex-shrink-0 text-[#00A018]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              )}
              <span className="flex-1 text-base md:text-xl lg:text-xl">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Button */}
      <motion.div
        variants={itemVariants}
        className="flex-shrink-0  md:mt-4 flex justify-center pb-4 lg:mt-1 mt-10  "
      >
        <a
          href={buttonLink}
          onClick={onClick}
          className="no-underline block w-fit mx-auto"
        >
          <VioletBtn
            text={buttonLabel}
            className="!rounded-full !px-12 !py-4 !text-xl lg:!text-lg"
          />
        </a>
      </motion.div>
    </motion.div>
  );
}
