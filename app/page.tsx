"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="https://team.mhacks.org"
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden border-2 border-white bg-transparent px-10 text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            <span className="relative flex items-center gap-3 text-lg font-bold uppercase tracking-wider">
              Join the Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
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
