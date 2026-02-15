"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowButton from "./GlowBtn";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false); // Mobile services toggle
  const [isHovered, setHovered] = useState(false); // Desktop hover state

  const toggleMenu = () => setOpen(!isOpen);

  const servicesList = [
    { name: "Web Dev", href: "/webdev" },
    { name: "Mobile Dev", href: "/mobiledev" },
    { name: "UI/UX", href: "/uiux" },
    { name: "Content Research", href: "/contentresearch" },
    { name: "Graphic Design", href: "/graphicdesign" },
    { name: "Ai Automation", href: "/aiautomation" },
  ];

  // Animation variants for specific dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, display: "none" },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for mobile menu
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
      <div className="sticky top-0 z-50 w-full md:h-fit max-w-330 h-35 lg:h-18 mx-auto mt-11 px-[1.5px] py-[1.5px] border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-[30px]">
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
              className="lg:hidden absolute md:text-4xl left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-100 hover:text-blue-300 cursor-pointer"
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
                  src="https://github.com/5656ANUJ/infinova-tech/blob/master/Public/infinova-logo.png?raw=true"
                  alt="Infinova Logo"
                  className="w-20 md:w-40 lg:w-50 h-fit"
                />
              </span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-12 text-white font-medium text-sm absolute right-8">
              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-indigo-900 hover:bg-white p-2.5 rounded-2xl transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-indigo-900 hover:bg-white p-2.5 rounded-2xl transition-all duration-300"
                >
                  Projects
                </Link>
              </li>

              {/* Desktop Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="hover:text-indigo-900 hover:bg-white p-2.5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center gap-1">
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${isHovered ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1a103c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden p-2 flex flex-col gap-1 ring-1 ring-white/5"
                    >
                      {servicesList.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-white/10 rounded-xl text-sm transition-colors text-center"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

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
            className="lg:hidden w-full mt-2 rounded-2xl md:space-y-8 md:py-6 bg-white/30 backdrop-blur-lg flex flex-col items-center space-y-6 text-4xl text-white rounded-b-2xl py-10 overflow-y-auto max-h-[80vh]"
          >
            <motion.li
              whileHover={{ scale: 1.1, color: "#1e3a8a" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-2xl md:text-2xl transition-colors hover:bg-white hover:text-indigo-900"
              >
                Home
              </Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1, color: "#1e3a8a" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/aboutus"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-2xl md:text-2xl transition-colors hover:bg-white hover:text-indigo-900"
              >
                About Us
              </Link>
            </motion.li>

            {/* Mobile Services Accordion */}
            <motion.li className="flex flex-col items-center w-full">
              <button
                onClick={() => setServicesOpen(!isServicesOpen)}
                className="px-4 py-2 rounded-2xl md:text-2xl transition-colors hover:bg-white hover:text-indigo-900 flex items-center gap-2"
              >
                Services
                <svg
                  className={`w-6 h-6 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col items-center gap-4 mt-4 bg-black/20 w-full py-4"
                  >
                    {servicesList.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        onClick={() => setOpen(false)}
                        className="text-2xl md:text-xl text-white/90 hover:text-white"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1, color: "#1e3a8a" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-2xl md:text-2xl transition-colors hover:bg-white hover:text-indigo-900"
              >
                Contact Us
              </Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
