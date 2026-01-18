"use client";

import { motion } from "framer-motion";
import Countdown from "../Countdown";
import weddingData from "@/config/wedding-data";

export default function Hero() {
  const { couple, weddingDate } = weddingData;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background with Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        {/* Hero Image */}
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('/images/hero.jpg?v=1')",
            backgroundPosition: '55% center',
          }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-script text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white mb-4 sm:mb-6 drop-shadow-2xl px-2"
          >
            {couple.coupleNames}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto max-w-xs sm:max-w-md mb-4 sm:mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-white mb-2 drop-shadow-lg"
          >
            {weddingDate.displayDate}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 tracking-wide drop-shadow-lg mb-16 sm:mb-20"
          >
            Port Sanilac, Michigan
          </motion.p>
        </motion.div>

        {/* Countdown Timer - Removed from Hero */}

        {/* Scroll Indicator - Arrow Only, Clickable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              // Scroll to the countdown section, accounting for fixed header height (approx 80px)
              window.scrollTo({
                top: window.innerHeight - 80,
                behavior: 'smooth'
              });
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to next section"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

