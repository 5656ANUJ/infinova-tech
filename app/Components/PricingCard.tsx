"use client";
import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

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
         w-[800px] lg:w-[400px] h-250  md:rounded-3xl  lg:rounded-[32px] rounded-[80px] p-4 border lg:border-3 border-4  border-[#4F46E5]
        bg-[#1A1034] text-white relative overflow-hidden
        shadow-[0_0_40px_rgba(118,75,255,0  )]
        px-18 py-12 md:py-6 md:pl-16 md:pr-16  lg:px-9 lg:py-2 
        flex flex-col  lg:h-[520px] justify-center gap-6  md:w-fit md:h-[720px]
        ${
          isPopular
            ? " border border-[#683FFF]  bg-white/5 p-20 backdrop-blur-sm  hover:bg-white/10 hover:shadow-2xl hover:shadow-[#4e46e570] transition-all duration-300 cursor-pointer"
            : " border border-[#683FFF] bg-white/5 p-20 backdrop-blur-sm hover:bg-white/10 hover:shadow-2xl hover:shadow-[#4e46e570] transition-all duration-300 cursor-pointer"
        }
      `}
    >
      {isPopular ? (
        <div className="absolute md:text-xl md:-right-5 md:top-8 text-3xl lg:text-xs  right-0 top-20 lg:right-1 lg:top-9 -translate-x-1/2 bg-[#683FFF] text-white font-bold px-4 py-1 rounded-full shadow-lg">
          Popular
        </div>
      ) : (
        <div className="absolute md:text-xl md:-right-2 md:top-8 right-0 top-20 lg:right-1 lg:top-9 -translate-x-1/2 bg-white/15 text-white text-3xl lg:text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          Basic
        </div>
      )}

      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="space-y-3  pt-4 lg:pt-4 md:pt-0 flex-shrink-0  "
      >
        <h3 className="text-[60px] lg:text-3xl md:text-[42px] font-bold tracking-tight lg:mt-2">
          {title}
        </h3>
        <p className=" text-[48px] md:text-[40px] lg:text-[30px] font-bold text-green-500 leading-tight group-hover:text-[3xl] mb-10 lg:mb-2 transition-all ">
          {price}
        </p>
      </motion.div>

      {/* Scrollable Features List */}
      <motion.div
        variants={containerVariants}
        className="flex-1   md:-mt-6 lg:mt-0 lg:px-0 md:px-0  overflow-y-scroll scrollbar-hide space-y-4  px-1 lg:h-5 h-5 " // ← SCROLLABLE + HIDE SCROLLBAR
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {features.map((item, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            className="flex items-start gap-3  text-[38px] lg:text-[20px] relative pl-0 "
          >
            {tickMarkSvg ? (
              <div
                className="flex-shrink-0 w-5 h-5 mt-0.5"
                dangerouslySetInnerHTML={{ __html: tickMarkSvg }}
              />
            ) : (
              <img
                src="./check_circle.svg"
                alt=""
                className="  md:h-8 lg:h-5 h-11 mr-4 lg:mr-0 lg:w-5 w-fit lg:mt-2 mt-2 "
              />
            )}
            <span className="flex-1  lg:text-xl text:2xl md:text-3xl">
              {item}
            </span>
          </motion.li>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        variants={itemVariants}
        className="flex-shrink-0  md:mt-4 flex justify-center pb-4 lg:mt-1 mt-10  "
      >
        <a
          href={buttonLink}
          onClick={onClick}
          className="
            block w-fit rounded-[999px]
            bg-[#683FFF]
            
            text-white font-semibold text-2xl lg:text-base py-4 text-center
             group-hover:scale-[1.02] group-hover:bg-[#4F56G8]
            transition-all duration-200 no-underline p-8 
          "
        >
          <span className="flex items-center md:text-[26px]  justify-center gap-2 md:text-2xl lg:text-xl text-[42px] ">
            {buttonLabel}
            {arrowSvg ? (
              <div
                className="w-5 h-5  flex-shrink-0"
                dangerouslySetInnerHTML={{ __html: arrowSvg }}
              />
            ) : (
              <span>→</span>
            )}
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
}
