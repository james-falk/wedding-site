"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Registry() {
  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Subtle Floral - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -top-8 -left-8 md:-left-12 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-15deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -top-8 -right-8 md:-right-12 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(20deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-8 -left-8 md:-left-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(140deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-8 -right-8 md:-right-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-145deg)' }}
          />
        </motion.div>

        {/* Additional Floral - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/2 -left-6 md:-left-10 w-32 md:w-40 h-32 md:h-40 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-50"
            style={{ transform: 'rotate(60deg)' }}
          />
        </motion.div>

        {/* Additional Floral - Middle Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute top-1/2 -right-6 md:-right-10 w-32 md:w-40 h-32 md:h-40 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-50"
            style={{ transform: 'rotate(-60deg)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sage-700 mb-4">
            Registry
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            className="paper-card bg-white/80 backdrop-blur-sm shadow-lg p-8 md:p-12 relative overflow-hidden border border-sage-100/50"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage-100 to-sage-200 opacity-20 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blush-100 to-blush-200 opacity-20 rounded-full -ml-16 -mb-16" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full mb-6 text-sage-600"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-medium text-sage-800 mb-6">
                Honeymoon Fund
              </h3>

              <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 max-w-2xl mx-auto font-light">
                <p>
                  We are so excited to celebrate our special day with all of you!
                </p>
                <p>
                  We've been blessed to have our home together for the past three years and already have everything we need to start this new chapter as husband and wife.
                </p>
                <p>
                  In lieu of traditional gifts, we would be incredibly grateful for contributions toward our honeymoon fund as we embark on our first adventure as a married couple!
                </p>
                <p className="text-sage-600 font-normal pt-4">
                  Thank you so much for your love, support, and generosity!
                </p>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

