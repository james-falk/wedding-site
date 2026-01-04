"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const { faq } = weddingData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-4">
            FAQ
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Got questions? We've got answers!
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sky-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-sky-500 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Contact Info */}
        <FadeIn delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us!
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Day-of Contact:</strong> {weddingData.contact.dayOfContact.name}
              </p>
              <a
                href={`tel:${weddingData.contact.dayOfContact.phone}`}
                className="text-sky-500 hover:text-sky-700 font-medium"
              >
                {weddingData.contact.dayOfContact.phone}
              </a>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

