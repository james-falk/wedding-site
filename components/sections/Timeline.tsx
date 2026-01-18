"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Timeline() {
  const { timeline } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Floral 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -top-16 -left-12 md:-left-20 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-50"
          />
        </motion.div>

        {/* Floral 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-16 -right-12 md:-right-20 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-50"
            style={{ transform: 'rotate(-15deg)' }}
          />
        </motion.div>

        {/* Floral 3 - Middle Left (between timeline items) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/3 -left-8 md:-left-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-45"
            style={{ transform: 'rotate(25deg)' }}
          />
        </motion.div>

        {/* Floral 4 - Middle Right (between timeline items) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 -right-8 md:-right-16 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-45"
            style={{ transform: 'rotate(-20deg)' }}
          />
        </motion.div>

        {/* Additional Floral 3 - Upper Middle Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute top-1/4 -left-4 md:left-4 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(-35deg) scaleX(-1)' }}
          />
        </motion.div>

        {/* Additional Floral 4 - Lower Middle Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-2/3 -right-4 md:right-4 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-38"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>

        {/* Additional Floral 1 - Mid-bottom Left accent */}
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: -120 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="absolute bottom-1/4 -left-6 md:left-0 w-28 md:w-40 h-28 md:h-40 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-32"
          />
        </motion.div>

        {/* Floral 1 - Bottom Left (rotated variant) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-16 -left-12 md:-left-20 w-52 md:w-72 h-52 md:h-72 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-40"
            style={{ transform: 'rotate(180deg)' }}
          />
        </motion.div>

        {/* Floral 2 - Bottom Right (flipped variant) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute -bottom-16 -right-12 md:-right-20 w-52 md:w-72 h-52 md:h-72 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-40"
            style={{ transform: 'rotate(165deg) scaleX(-1)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sage-700 mb-4">
            Timeline
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            Here's what to expect on our special day
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage-200 via-sage-300 to-sage-200" />

          {timeline.map((item, index) => (
            <FadeIn key={item.time} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-sage-500 rounded-full border-4 border-cream-50 shadow-md z-10 ${
                    index % 2 === 0 
                      ? "left-8 md:left-auto md:right-[-9px]" 
                      : "left-8 md:left-[-9px]"
                  }`}
                />

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="paper-card bg-white/80 backdrop-blur-sm shadow-md p-6 relative overflow-hidden border border-sage-100/50"
                  >
                    <div className="relative z-10">
                      <div className="text-sage-600 font-medium text-xl mb-2">
                        {item.time}
                      </div>
                      <div className="text-gray-800 text-lg font-normal mb-1">
                        {item.event}
                      </div>
                      {item.description && (
                        <div className="text-gray-600 text-sm font-light italic">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

