"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";

export default function Registry() {
  const { registry } = weddingData;

  const iconMap: { [key: string]: React.ReactElement } = {
    gift: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
      </svg>
    ),
    "shopping-cart": (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    plane: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
      </svg>
    ),
  };

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-4">
            Registry
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Your presence is the best present, but if you wish to honor us with a gift, 
            we've registered at the following places
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {registry.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.2}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden group cursor-pointer"
              >
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-300 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mb-6 text-sky-500"
                  >
                    {iconMap[item.icon]}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.name}
                  </h3>

                  {item.description && (
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>
                  )}

                  <div className="inline-flex items-center text-sky-500 font-medium group-hover:text-sky-700 transition-colors">
                    View Registry
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </motion.svg>
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

