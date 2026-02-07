"use client";
import Link from "next/link";
import GlowButton from "./GlowBtn";
import { motion } from "framer-motion";

const QUICK_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact us", href: "/contact" },
];

const COMPANY_LINKS = [
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policies", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const CONNECT_LINKS = [
  { name: "Instagram", href: "#", icon: "/Instagram.svg" },
  { name: "X", href: "#", icon: "/X.svg" },
  { name: "LinkedIn", href: "#", icon: "/LinkedIn.svg" },
  { name: "Youtube", href: "#", icon: "/Youtube.svg" },
];

const LEGAL_LINKS = [
  { name: "Privacy policy", href: "/privacy" },
  { name: "Terms of service", href: "/terms" },
  { name: "Cookie settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#000220] text-gray-300">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-8">
            <Link href="/" className="inline-block">
              <img
                src="/InfinovaLogo.png"
                alt="Infinova Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-center lg:text-left text-lg md:text-xl font-light text-white/90 max-w-md mx-auto lg:mx-0">
              Stay ahead with our latest tech insights and service updates.
            </p>

            <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              />
              <div className="flex justify-center sm:justify-start">
                <GlowButton text="Subscribe" className="w-full sm:w-auto" />
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center lg:text-left max-w-sm">
              By subscribing, you agree to our privacy policy and email
              communications.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-4 mt-8 lg:mt-0">
            {/* Quick Links */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <h3 className="font-semibold text-white text-lg tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4 flex flex-col items-center lg:items-start">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base lg:text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <h3 className="font-semibold text-white text-lg tracking-wide">
                Company
              </h3>
              <ul className="space-y-4 flex flex-col items-center lg:items-start">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-base lg:text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <h3 className="font-semibold text-white text-lg tracking-wide">
                Connect with Us
              </h3>
              <ul className="space-y-4 w-full">
                {CONNECT_LINKS.map((link) => (
                  <li
                    key={link.name}
                    className="flex justify-center lg:justify-start"
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 w-fit p-2 rounded-lg hover:bg-white/5"
                    >
                      <div className="relative w-6 h-6 flex items-center justify-center transition-transform group-hover:scale-110">
                        <img
                          src={link.icon}
                          alt={link.name}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-base lg:text-sm font-medium">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Infinova Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
