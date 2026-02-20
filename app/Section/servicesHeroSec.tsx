"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import VioletBtn from "../Components/violetBtn";
import TextType from "../Components/Typewriter";

export default function ServicesHeroSec({
  heroTitle,
  heroMessage,
  typewriterStrings,
  heroImage,
  reactImg,
  mongoImg,
  jsImg,
}: {
  heroTitle: string;
  heroMessage: string;
  typewriterStrings: string[];
  heroImage: string;
  reactImg: string;
  mongoImg: string;
  jsImg: string;
}) {
  return (
    <section className="relative overflow-hidden w-full text-white px-4 sm:px-6 lg:px-12 flex flex-col lg:items-center">
      <div className="w-full max-w-7xl mx-auto min-h-[calc(100vh-140px)] flex flex-col items-center justify-center py-10 gap-8 lg:gap-16 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Mobile */}
        <motion.div
          className="order-1 lg:order-2 w-full lg:flex lg:justify-end  "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-auto mx-auto flex justify-center items-center overflow-hidden">
            {/* Main Hero Image */}
            {/* Main Hero Image */}
            <motion.div
              className="w-auto h-auto mx-auto relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={heroImage}
                alt="Hero"
                width={800}
                height={800}
                className="w-auto h-56 md:h-[50vh] lg:h-[85vh] object-contain rounded-xl mx-auto"
                priority
              />
            </motion.div>
            <div className="lg:hidden  md:grid md:place-items-center md:space-y-2.5 ">
              <hr className="md:h-11 md:w-full w-full h-11 border-none bg-linear-to-b from-purple-400/30 to-transparent rounded-3xl" />
              {/* <hr className="md:h-1.5 md:w-[calc(100%-36px)] rounded-2xl bg-purple-700" />
                            <hr className="md:h-1 md:w-[calc(100%-81px)] rounded-2xl bg-purple-500" /> */}
            </div>

            {/* Overlay Images */}
            <motion.div
              className="absolute md:-top-14 top-2 left-0 lg:-left-15 w-16 h-16 md:w-20 md:h-20 lg:w-30 lg:h-30 lg:-top-5 translate-y-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image
                src={reactImg}
                alt="React"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>

            <motion.div
              className="absolute md:top-60 top-[60%] right-0 lg:-right-12.5 lg:top-62.5 w-16 h-16 md:w-20 md:h-20 lg:w-30 lg:h-30"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image
                src={mongoImg}
                alt="Mongo"
                width={120}
                height={120}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>

            <motion.div
              className="absolute md:top-4 top-24 right-2 lg:top-20 lg:-right-2.5 w-16 h-16 md:w-20 md:h-20 lg:w-40 lg:h-40"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src={jsImg}
                alt="JS"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Content - Bottom center on mobile, Left on desktop */}
        <motion.div
          className="order-2 lg:order-1 w-full lg:ml-20 lg:-mt-24 max-w-2xl text-center lg:text-left space-y-6 lg:space-y-8 px-4 lg:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl leading-tight ">
            {heroTitle}
          </h1>

          <div className="text-xl md:text-3xl lg:text-5xl font-bold text-[#8A57FF] mx-auto lg:mx-0">
            <TextType
              text={typewriterStrings}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>

          <p className="text-md md:text-lg lg:text-xl">{heroMessage}</p>

          <VioletBtn text="Explore" />
        </motion.div>
      </div>
    </section>
  );
}
