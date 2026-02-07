"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  avatar?: string;
}

interface TestimonialProps {
  items?: TestimonialItem[];
  speed?: number;
}

export default function Testimonial({
  items = [],
  speed = 1,
}: TestimonialProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Early return if no items provided
  if (!items || items.length === 0) {
    return null;
  }

  // Stable scroll detection callback
  const updateActiveIndex = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const cards = document.querySelectorAll(".testimonial-card");
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.width === 0) return;

      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      const tolerance = 500;
      if (distance < closestDistance && distance < tolerance) {
        closestDistance = distance;
        closestIndex = index % items.length;
      }
    });

    setActiveIndex(closestIndex);
  }, [items.length]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      if (isPausedRef.current) {
        rafRef.current = requestAnimationFrame(scrollStep);
        return;
      }

      scrollContainer.scrollBy({ left: speed, behavior: "auto" });

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      rafRef.current = requestAnimationFrame(scrollStep);
    };

    rafRef.current = requestAnimationFrame(scrollStep);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed]);

  // Pause controls
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      isPausedRef.current = false;
    };

    const handleTouchStart = () => {
      isPausedRef.current = true;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        isPausedRef.current = false;
      }, 150);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const loopCards: TestimonialItem[] = [...items, ...items];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      requestAnimationFrame(updateActiveIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    updateActiveIndex();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [updateActiveIndex]);

  return (
    <section className="min-h-[100vh] w-full lg:min-h-fit lg:max-w-[100vw] mt-20 lg:mt-0 lg:mb-0 mb-20 md:mt-16 lg:p-20 overflow-hidden">
      <div className="min-h-fit w-[1000px] lg:min-w-full lg:rounded-[50px] mb-16 lg:mb-0 ">
        <div className="p-10 mb-30 md:mb-12 lg:mb-18 lg:w-fit w-full md:w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-5xl md:text-4xl md:text-center font-bold text-center text-white bg-clip-text"
          >
            TESTIMONIALS
          </motion.h1>
        </div>

        <div
          ref={scrollRef}
          className="relative w-full scrollbar-hide overflow-x-scroll overflow-y-hidden min-h-fit p-8 md:p-10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        >
          <div className="flex gap-4 md:gap-6 w-max items-center ">
            {loopCards.map((item, i) => (
              <div
                key={`card-${i}`}
                data-index={i}
                className={`testimonial-card flex-none bg-white rounded-4xl mb-12 lg:mb-16 lg:rounded-2xl lg:border lg:border-2 lg:border-black
                  shadow-[0_12px_20px_rgba(0,0,0,0.25)]
                  overflow-hidden
                  p-6 md:p-8 lg:p-10 lg:max-h-[20rem] lg:min-h-[20rem]
                  w-[160vw] sm:w-[20rem] md:w-[32rem] lg:w-[40rem] 
                  h-auto pb-20 md:pb-0 lg:pb-0  md:h-auto lg:h-[120vh]
                  transition-all duration-700 ease-in-out
                  ${activeIndex === i % items.length ? "scale-102 opacity-100" : "scale-95 opacity-80 border lg:border-black/30"}
                `}
              >
                <div className="flex items-center lg:items-start mb-6 lg:gap-10 flex-col lg:flex-row gap-8 md:gap-10 h-full  ">
                  <img
                    src={item.avatar || "/default-avatar.png"}
                    alt={item.name}
                    className={`lg:w-16 lg:h-16 w-32 h-32 md:w-18 md:h-18 rounded-full  object-cover border-4 border-black/30 lg:border-2 transition-transform duration-500 ease-in-out flex-shrink-0 mt-4 lg:mt-0 ${activeIndex === i % items.length ? "scale-105 opacity-100 shadow-lg" : "scale-95 opacity-70"}`}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <h3
                        className={`text-3xl md:text-3xl lg:text-lg font-black text-gray-900 leading-tight transition-opacity duration-700 ease-in-out text-center lg:text-left ${activeIndex === i % items.length ? "opacity-100" : "opacity-70"}`}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-3 text-2xl md:text-2xl lg:text-sm font-medium text-gray-500 text-center lg:text-left mb-6">
                        {item.company}
                      </p>
                      <p
                        className={`px-8 mt-12 lg:mt-0 lg:px-0 md:px-0 text-[28px] md:text-[28px] lg:text-lg leading-relaxed text-gray-700 transition-opacity duration-700 ease-in-out ${activeIndex === i % items.length ? "opacity-100" : "opacity-70"}`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
