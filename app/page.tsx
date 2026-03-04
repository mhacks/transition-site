"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col bg-black text-white overflow-x-hidden overflow-y-auto">
      {/* Caution Tape Background Effect - Top */}
      <div
        className="absolute top-0 left-0 w-full h-16 opacity-20 transform -skew-y-2 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 40px)",
        }}
      />
      <div
        className="absolute top-24 left-0 w-full h-8 opacity-10 transform skew-y-1 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 15px, #ffffff 15px, #ffffff 30px)",
        }}
      />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-between gap-8 px-4 py-8 text-center sm:py-10">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[22rem] border-4 border-white px-3 py-6 sm:max-w-3xl sm:border-8 sm:px-8 sm:py-10 md:max-w-4xl md:px-20 md:py-16"
          >
            {/* Decorative corner squares */}
            <div className="absolute -top-2 -left-2 h-4 w-4 border-2 border-white bg-black sm:-top-3 sm:-left-3 sm:h-6 sm:w-6 sm:border-4"></div>
            <div className="absolute -top-2 -right-2 h-4 w-4 border-2 border-white bg-black sm:-top-3 sm:-right-3 sm:h-6 sm:w-6 sm:border-4"></div>
            <div className="absolute -bottom-2 -left-2 h-4 w-4 border-2 border-white bg-black sm:-bottom-3 sm:-left-3 sm:h-6 sm:w-6 sm:border-4"></div>
            <div className="absolute -bottom-2 -right-2 h-4 w-4 border-2 border-white bg-black sm:-bottom-3 sm:-right-3 sm:h-6 sm:w-6 sm:border-4"></div>

            <h1 className="mb-2 text-4xl font-black uppercase tracking-tight font-sans sm:text-6xl md:text-8xl lg:text-9xl">
              WORK IN
              <br />
              PROGRESS
            </h1>
            <div className="mx-auto mb-4 h-1 w-4/5 bg-white sm:mb-6 sm:w-full" />
            <p className="text-lg font-mono uppercase tracking-[0.12em] sm:text-2xl md:text-3xl">
              MHACKS 26 • COMING SOON
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <p className="text-base font-mono uppercase tracking-widest text-gray-300 sm:text-xl">
              Follow us for more information
            </p>
            <div className="flex gap-4 sm:gap-6">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/mhacks_/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FiInstagram className="h-6 w-6" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/mhacks/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <FiLinkedin className="h-6 w-6" />
              </motion.a>

              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@mhacks62/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <SiTiktok className="h-6 w-6" />
              </motion.a>

              {/* X */}
              <motion.a
                href="https://x.com/mhacks/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center border-2 border-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <RiTwitterXFill className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <p className="z-20 px-4 text-center text-xs font-mono text-gray-300 md:text-sm">
          <span className="inline-block border border-white/40 bg-black px-3 py-1">
            Interested in sponsoring? Contact us at{" "}
            <a
              href="mailto:sponsorship@mhacks.org"
              className="underline transition-colors duration-300 hover:text-white"
            >
              sponsorship@mhacks.org
            </a>
            .
          </span>
        </p>
      </div>

      {/* Caution Tape Background Effect - Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 opacity-20 transform skew-y-2 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, #ffffff 30px, #ffffff 60px)",
        }}
      />
      <div
        className="absolute bottom-32 left-0 w-full h-6 opacity-10 transform -skew-y-1 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)",
        }}
      />
    </main>
  );
}
