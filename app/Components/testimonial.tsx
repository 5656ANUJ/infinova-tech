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

  // Early return logic moved to end of component after hooks

  // Stable scroll detection callback
  const updateActiveIndex = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const cards = scrollContainer.querySelectorAll(".testimonial-card");
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

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="min-h-0 w-full lg:min-h-fit lg:max-w-[100vw] mt-10 lg:mt-0 lg:mb-0 mb-10 md:mt-16 lg:p-20 overflow-hidden">
      <div className="min-h-fit w-full lg:rounded-[50px] mb-16 lg:mb-0">
        <div className="p-4 md:p-10 mb-8 md:mb-12 lg:mb-18 w-full">
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
          className="relative w-full scrollbar-hide overflow-x-scroll overflow-y-hidden min-h-fit p-4 md:p-10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 93%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4 md:gap-6 w-max items-center">
            {loopCards.map((item, i) => (
              <div
                key={`card-${i}`}
                data-index={i}
                className={`testimonial-card flex-none bg-[#0b0d28] rounded-2xl border border-white/30
                  shadow-[0_12px_20px_rgba(0,0,0,0.25)]
                  overflow-hidden
                  p-5 md:p-8 lg:p-10 lg:max-h-[20rem] lg:min-h-[20rem]
                  w-[80vw] sm:w-[20rem] md:w-[32rem] lg:w-[40rem]
                  h-auto pb-6 md:pb-0 lg:pb-0 md:h-auto
                  transition-all duration-700 ease-in-out
                  ${activeIndex === i % items.length ? "scale-102 opacity-100" : "scale-95 opacity-80"}
                `}
              >
                <div className="flex items-center lg:items-start mb-4 lg:gap-10 flex-col lg:flex-row gap-4 md:gap-6 h-full">
                  <img
                    src={item.avatar || "/default-avatar.png"}
                    alt={item.name}
                    className={`w-14 h-14 md:w-18 md:h-18 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white/30 transition-transform duration-500 ease-in-out flex-shrink-0 ${activeIndex === i % items.length ? "scale-105 opacity-100 shadow-lg" : "scale-95 opacity-70"}`}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <h3
                        className={`text-lg md:text-xl lg:text-lg font-black text-white leading-tight transition-opacity duration-700 ease-in-out text-center lg:text-left ${activeIndex === i % items.length ? "opacity-100" : "opacity-70"}`}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm md:text-base lg:text-sm font-medium text-white/80 text-center lg:text-left mb-3">
                        {item.company}
                      </p>
                      <p
                        className={`text-sm md:text-base lg:text-lg leading-relaxed text-white/90 transition-opacity duration-700 ease-in-out ${activeIndex === i % items.length ? "opacity-100" : "opacity-70"}`}
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
