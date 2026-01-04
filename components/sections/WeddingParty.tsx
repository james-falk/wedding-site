"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingParty() {
  const { weddingParty } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-4">
            Wedding Party
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            The special people standing by our side
          </p>
        </FadeIn>

        {/* Bridesmaids */}
        <div className="mb-16">
          <FadeIn delay={0.1}>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Bridesmaids
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {weddingParty.bridesmaids.map((person, index) => (
              <FadeIn key={person.name} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80')`,
                      }}
                    />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {person.name}
                    </h4>
                    <p className="text-sky-500 font-semibold mb-2">
                      {person.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {person.relation}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Groomsmen */}
        <div>
          <FadeIn delay={0.4}>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Groomsmen
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {weddingParty.groomsmen.map((person, index) => (
              <FadeIn key={person.name} delay={0.5 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80')`,
                      }}
                    />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {person.name}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-2">
                      {person.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {person.relation}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

