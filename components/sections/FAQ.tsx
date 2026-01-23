"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FAQ() {
  const { faq } = weddingData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            style={{ transform: 'rotate(5deg)' }}
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
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-8deg)' }}
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
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(155deg)' }}
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
            style={{ transform: 'rotate(-155deg)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sage-700 mb-4">
            FAQ
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Got questions? We've got answers!
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="paper-card bg-white/80 backdrop-blur-sm shadow-md overflow-hidden border border-sage-100/50"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage-50/50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800 pr-4">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-sage-500 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-700 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

