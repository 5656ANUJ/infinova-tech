"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
  isLeft: boolean;
  index?: number;
  hoveredIndex?: number | null;
  setHoveredIndex?: (index: number | null) => void;
}

const ServicesCard = ({
  title,
  description,
  image,
  isLeft,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ServicesCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setIsDesktop(window.innerWidth >= 1024);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isOtherHovered =
    hoveredIndex !== null &&
    hoveredIndex !== undefined &&
    index !== undefined &&
    hoveredIndex !== index;

  return (
    <div className="relative w-full lg:w-full h-[250px] md:h-[280px] lg:h-[280px]">
      <motion.div
        className={`
          absolute top-0 h-full w-full
          group rounded-3xl overflow-hidden
          border-3 border-white/30 text-white
          flex ${isLeft ? "flex-row" : "flex-row-reverse"}
          cursor-pointer shadow-2xl bg-transparent backdrop-blur-md
          ${isLeft ? "left-0" : "right-0"} 
        `}
        onClick={() => {
          if (isTouchDevice) {
            setExpanded(!expanded);
          }
        }}
        onHoverStart={() => {
          if (!isTouchDevice && setHoveredIndex && index !== undefined) {
            setHoveredIndex(index);
          }
        }}
        onHoverEnd={() => {
          if (!isTouchDevice && setHoveredIndex) {
            setHoveredIndex(null);
          }
        }}
        whileHover={
          isDesktop
            ? {
                width: "210%", // Expand over neighbor
                zIndex: 50,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }
            : {}
        }
        animate={{
          width: expanded && isDesktop ? "210%" : "100%",

          scale: expanded ? 1.05 : 1,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        }}
      >
        {/* IMAGE SECTION*/}
        <div
          className={`relative h-full bg-transparent backdrop-blur-xl shadow-2xl justify-center min-w-full md:group-hover:min-w-[40%] transition-all duration-500 ease-in-out overflow-hidden flex items-center
           ${isLeft ? "justify-start" : "justify-end"}`}
        >
          <div className="absolute  inset-0 justify-center grid place-items-center  overflow-hidden transition-transform duration-700 group-hover:scale-110 ">
            <img
              src={image || "/Youtube.svg"}
              alt=""
              className={`w-40 h-40 md:w-60 md:h-60 lg:w-60 lg:h-60 transition-opacity duration-500 ${
                isOtherHovered
                  ? "opacity-10"
                  : expanded
                    ? "opacity-20"
                    : "opacity-40"
              }`}
            />
          </div>

          <div className="absolute inset-0  bg-transparent transition-colors" />

          <div
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300`}
          >
            {/* Title only when not expanded */}
            <div className="group relative">
              <div
                className={`
      ${expanded ? "opacity-0" : " opacity-100"}
      transition-opacity duration-300
      group-hover:opacity-0
    `}
              >
                {!expanded && (
                  <h3
                    className={`
          text-xl md:text-4xl lg:text-3xl font-black uppercase tracking-widest text-center px-4 leading-tight
          ${expanded ? "opacity-0" : "opacity-100"}
        `}
                  >
                    {title}
                  </h3>
                )}
              </div>
            </div>

            {/* Description only when expanded */}
            {expanded && (
              <>
                <div className="w-full h-full flex justify-center flex-col p-4 md:p-8 overflow-hidden bg-black/80 backdrop-blur-md">
                  <h3 className="text-lg md:text-3xl font-bold tracking-widest uppercase mb-2 md:mb-4 whitespace-nowrap">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-xl text-gray-300 leading-relaxed line-clamp-none md:line-clamp-4 overflow-y-auto">
                    {description}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className={`w-full h-fit `}>
            <div
              className={`group-hover:hidden absolute bottom-10 right-10 ${expanded ? "bg-[#4F00DF]" : "bg-[#4F00DF]"} mt-6 lg:w-14 lg:h-14 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-black transition-all`}
            >
              <span
                className={`${expanded ? "hidden" : "inline"} text-xl lg:text-2xl`}
              >
                {">"}
              </span>

              {/* Show "x" only when expanded */}
              <span
                className={`${expanded ? "inline " : "hidden"} text-2xl text-center lg:text-2xl`}
              >
                X
              </span>
            </div>
          </div>
        </div>

        {/* info section: Slides in from the right */}
        <div
          className={`
    hidden md:flex flex-col justify-center px-8 transition-all duration-500 delay-100 overflow-hidden
    ${expanded ? "opacity-100 w-[60%]" : "opacity-0 w-0 md:group-hover:opacity-100 md:group-hover:w-[60%]"}
  `}
        >
          <h3 className="text-3xl font-bold tracking-widest uppercase mb-4 whitespace-nowrap">
            {title}
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesCard;
