"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white relative overflow-hidden">
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

      <div className="z-10 flex flex-col items-center gap-12 p-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-8 border-white p-12 md:p-20 relative max-w-4xl"
        >
          {/* Decorative corner squares */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-black border-4 border-white"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-black border-4 border-white"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black border-4 border-white"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black border-4 border-white"></div>

          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-2 font-sans">
            WORK IN
            <br />
            PROGRESS
          </h1>
          <div className="h-1 w-full bg-white mb-6" />
          <p className="text-xl md:text-2xl font-mono uppercase tracking-widest">
            MHACKS 26 • COMING SOON
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-lg md:text-xl font-mono uppercase tracking-widest text-gray-300">
            Follow us for more information
          </p>
          <div className="flex gap-6">
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/mhacks_/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <FiInstagram className="w-6 h-6" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/mhacks/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@mhacks62/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <SiTiktok className="w-6 h-6" />
            </motion.a>

            {/* X */}
            <motion.a
              href="https://x.com/mhacks/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <RiTwitterXFill className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
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
