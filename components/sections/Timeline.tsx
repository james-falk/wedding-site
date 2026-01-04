"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";

export default function Timeline() {
  const { timeline } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-4">
            Timeline
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Here's what to expect on our special day
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-100" />

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
                  className="absolute left-8 md:left-auto md:right-[-9px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg z-10"
                  style={index % 2 === 0 ? {} : { left: "auto", right: "-9px" }}
                />

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full blur-2xl opacity-50" />
                    
                    <div className="relative z-10">
                      <div className="text-sky-500 font-bold text-xl mb-2">
                        {item.time}
                      </div>
                      <div className="text-gray-800 text-lg font-medium">
                        {item.event}
                      </div>
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

