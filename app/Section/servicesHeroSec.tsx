"use client";
import { motion } from "framer-motion";
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
    <section className="w-full text-white px-4 sm:px-6 lg:px-12 flex flex-col lg:items-center">
      <div className="w-full max-w-7xl mx-auto h-[calc(100vh-140px)] flex flex-col items-center justify-center gap-8 lg:gap-16 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Mobile */}
        <motion.div
          className="order-1 lg:order-2 w-full lg:flex lg:justify-end  "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-4xl h-auto mx-auto">
            {/* Main Hero Image */}
            <motion.img
              src={heroImage}
              alt="Hero"
              className="w-auto h-auto max-h-[80vh] lg:max-h-[90vh] object-contain rounded-xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="lg:hidden  md:grid md:place-items-center md:space-y-2.5 ">
              <hr className="md:h-11 md:w-full w-full h-11 border-none bg-gradient-to-b from-purple-400/30 to-transparent rounded-3xl" />
              {/* <hr className="md:h-1.5 md:w-[calc(100%-36px)] rounded-2xl bg-purple-700" />
                            <hr className="md:h-1 md:w-[calc(100%-81px)] rounded-2xl bg-purple-500" /> */}
            </div>

            {/* Overlay Images */}
            <motion.img
              src={reactImg}
             
              className="absolute  md:-top-14 md:h-86 top-2 left-[-70] w-30 h-30 lg:w-40 lg:h-40 lg:top-[-20] lg:left-[-60] object-contain rounded-full translate-y-10 "
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.img
              src={mongoImg}
            
              className="absolute md:top-60 md:h-86 top-[400px] right-3 lg:right-[-50] lg:top-[250px] w-30 h-30 lg:w-30 lg:h-30 object-contain rounded-full "
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.img 
              src={jsImg}
             
              className="absolute md:top-4 md:h-86  top-32 right-2 lg:top-20 lg:right-[-10] w-20 h-20 lg:w-40 lg:h-40 object-contain rounded-full"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
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

          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8A57FF] mx-auto lg:mx-0 ">
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
