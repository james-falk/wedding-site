"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";

export default function OurStory() {
  const { story } = weddingData;

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-16">
            {story.title}
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {/* How We Met */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80')",
                  }}
                />
              </div>
              
              {/* Text */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  How We Met ❤️
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {story.howWeMet}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* The Proposal */}
          <FadeIn delay={0.4}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text - comes first on desktop, order reversed */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  The Proposal 💍
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {story.engagement}
                </p>
              </div>
              
              {/* Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl md:order-1">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1529634597447-89a9b5e0a6c9?w=800&q=80')",
                  }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.6}>
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <svg
                  className="w-12 h-12 text-sky-200 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-script text-3xl md:text-4xl text-gray-700 italic px-4">
                  {story.quote}
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

