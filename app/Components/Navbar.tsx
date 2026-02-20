"use client";
import Link from "next/link";
import Image from "next/image";
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

  // Animation variants for mobile sidebar
  const menuVariants: any = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div className="sticky top-0 md:top-4 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-7xl h-16 md:h-18 mx-auto mt-4 px-[1.5px] py-[1.5px] border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-2xl md:rounded-[30px]">
        <motion.header className="flex justify-center h-full relative z-50">
          <motion.nav
            className="
              relative w-full h-full px-4 lg:px-8
              rounded-2xl md:rounded-[30px] border border-white/10 z-[50]
              bg-white/5 backdrop-blur-[17.5px]
              shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
              hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.45)]
              transition-all duration-300
              flex items-center justify-center lg:justify-between
            "
          >
            {/* Mobile Hamburger */}
            <motion.button
              className="lg:hidden absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl z-[100] hover:text-blue-300 cursor-pointer"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Toggle menu"
            >
              ☰
            </motion.button>

            {/* Logo */}
            <div className="flex items-center justify-center w-full lg:w-auto z-[50]">
              <span className="flex items-center gap-2 font-semibold text-white text-base lg:text-lg">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/infinova-logo.png"
                    alt="Infinova Logo"
                    width={200}
                    height={80}
                    className="w-24 md:w-32 lg:w-40 h-auto"
                    priority
                  />
                </Link>
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

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            />
            {/* Sidebar Container */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-[100dvh] w-[80vw] max-w-sm bg-[#1A1034] shadow-2xl z-[70] flex flex-col items-start p-8 overflow-y-auto lg:hidden border-r border-white/10"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-2xl font-bold hover:text-blue-300 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center mb-10 w-full">
                <Image
                  src="https://github.com/5656ANUJ/infinova-tech/blob/master/Public/infinova-logo.png?raw=true"
                  alt="Infinova Logo"
                  width={150}
                  height={60}
                  className="w-32 h-auto"
                />
              </div>

              <ul className="flex flex-col space-y-4 w-full text-xl text-white">
                <motion.li
                  whileHover={{ scale: 1.05, color: "#93c5fd" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block py-2"
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05, color: "#93c5fd" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/aboutus"
                    onClick={() => setOpen(false)}
                    className="block py-2"
                  >
                    About Us
                  </Link>
                </motion.li>

                {/* Mobile Services Accordion */}
                <motion.li className="flex flex-col w-full">
                  <button
                    onClick={() => setServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full py-2 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    Services
                    <svg
                      className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
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
                        className="flex flex-col gap-2 mt-2 ml-4 border-l-2 border-white/10 pl-4 py-2"
                      >
                        {servicesList.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            onClick={() => setOpen(false)}
                            className="text-lg text-gray-300 hover:text-white py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                <motion.li
                  whileHover={{ scale: 1.05, color: "#93c5fd" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block py-2"
                  >
                    Contact Us
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
