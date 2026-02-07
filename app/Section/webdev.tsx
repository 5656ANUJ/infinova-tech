"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero({
  heroMessage,
  typewriterStrings,
  heroImage,
  reactImg,
  mongoImg,
  jsImg,
}: {
  heroMessage: string;
  typewriterStrings: string[];
  heroImage: string;
  reactImg: string;
  mongoImg: string;
  jsImg: string;
}) {
  return (
    <section className="w-full  bg-[#1A0033] text-white px-4 sm:px-6 lg:px-12 py-12  flex flex-col lg:items-center mb-20 lg:mb-0 mt-[-30] lg::mt-0">
      <div className="w-full  max-w-7xl mx-auto  min-h-[100vh]  flex-1 flex flex-col items-center justify-center gap-12 lg:gap-20 lg:grid lg:grid-cols-2 lg:items-center">
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
              className="w-full  md:h-200 h-auto object-contain rounded-xl "
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
              alt="React"
              className="absolute  md:-top-14 md:h-86 top-2 left-[-70] w-100 h-100 lg:w-70 lg:h-70 lg:top-[-20] lg:left-[-60] object-contain rounded-full "
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.img
              src={mongoImg}
              alt="MongoDB"
              className="absolute md:top-60 md:h-86 top-[400px] right-3 lg:right-[-50] lg:top-[250px] w-60 h-60 lg:w-60 lg:h-60 object-contain rounded-full "
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.img
              src={jsImg}
              alt="JavaScript"
              className="absolute md:top-4 md:h-86  top-32 right-2 lg:top-20 lg:right-[-10] w-60 h-60 lg:w-50 lg:h-50 object-contain rounded-full"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Content - Bottom center on mobile, Left on desktop */}
        <motion.div
          className=" lg:m-16 md:-m-8 -m-16 order-2 lg:order-1 w-full lg:ml-20 max-w-2xl text-center lg:text-left space-y-6 lg:space-y-12 px-4 lg:px-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-bold text-6xl sm:text-5xl lg:text-6xl leading-tight lg:-mb-[-20px] ">
            Website For
          </h1>

          <div className="text-8xl sm:text-6xl lg:text-7xl font-bold text-[#8A57FF] mx-auto lg:mx-0 ">
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <p className="text-4xl md:text-3xl lg:mt-0 mt-14 sm:text-xl lg:text-2xl text-white leading-relaxed w-fit -mx-30 lg:mx-0 lg:mx-0">
            {heroMessage}
          </p>

          <motion.button
            className="mx-auto lg:mx-0 mt-8 lg:mt-0 bg-purple-600 hover:bg-purple-700 text-4xl lg:text-2xl font-semibold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
