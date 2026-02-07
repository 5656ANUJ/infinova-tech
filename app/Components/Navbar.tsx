"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "./GlowBtn";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  // Animation variants for dropdown
  const menuVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div className="sticky top-0 z-100 w-full md:h-fit max-w-330 h-35 lg:h-18 mx-auto mt-11 px-[1.5px] py-[1.5px] border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-[30px]">
        <motion.header className="flex justify-center h-full relative z-50">
          <motion.nav
            className="
              relative w-full h-full px-6 lg:px-8
              rounded-[30px] border border-white/10 z-50
              bg-white/5 backdrop-blur-[17.5px]
              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
              hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.45)]
              transition-all duration-300
              flex items-center justify-center lg:justify-between
            "
          >
            {/* Mobile Hamburger / Cross */}
            <motion.button
              className="lg:hidden absolute md:text-4xl  left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-100 hover:text-blue-300 cursor-pointer"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </motion.button>

            {/* Logo */}
            <div className="flex items-center justify-center w-full lg:w-auto z-50">
              <span className="flex items-center gap-2 font-semibold text-white text-base lg:text-lg">
                <img
                  src="/InfinovaLogo.png"
                  alt="Infinova Logo"
                  className="w-20 md:w-40 lg:w-50 h-fit  "
                />
              </span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-12 text-white font-medium text-sm absolute right-8">
              {["About Us", "Projects", "Services"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-indigo-900 hover:bg-white p-2.5 rounded-2xl transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact">
                  <GlowButton text="Contact Us" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        </motion.header>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden w-full mt-2 rounded-2xl md:space-y-8  md:py-6 bg-white/30 backdrop-blur-lg flex flex-col items-center space-y-14 text-4xl text-white rounded-b-2xl py-10"
          >
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutus" },
              { name: "Services", href: "/services" },
              { name: "Contact Us", href: "/contact" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#1e3a8a" }} // hover effect
                whileTap={{ scale: 0.95 }} // click effect
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-2xl  md:text-2xl transition-colors hover:bg-white hover:text-indigo-900"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
