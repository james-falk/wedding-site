"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingParty() {
  const { weddingParty } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Floral - Top Left Corner */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -top-12 -left-8 md:-left-20 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-40"
            style={{ transform: 'rotate(-10deg)' }}
          />
        </motion.div>

        {/* Floral - Top Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-12 -right-8 md:-right-20 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-40"
            style={{ transform: 'rotate(15deg)' }}
          />
        </motion.div>

        {/* Floral - Upper Left (near bridesmaids) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/4 -left-6 md:-left-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(25deg)' }}
          />
        </motion.div>

        {/* Floral - Upper Right (near bridesmaids) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/4 -right-6 md:-right-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(-30deg)' }}
          />
        </motion.div>

        {/* Floral - Middle Left (between sections) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/2 -left-4 md:left-2 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-30"
            style={{ transform: 'rotate(-40deg) scaleX(-1)' }}
          />
        </motion.div>

        {/* Floral - Middle Right (between sections) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute top-1/2 -right-4 md:right-2 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-30"
            style={{ transform: 'rotate(40deg)' }}
          />
        </motion.div>

        {/* Floral - Lower Left (near groomsmen) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-2/3 -left-6 md:-left-10 w-38 md:w-52 h-38 md:h-52 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-32"
            style={{ transform: 'rotate(-25deg) scaleX(-1)' }}
          />
        </motion.div>

        {/* Floral - Lower Right (near groomsmen) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute top-2/3 -right-6 md:-right-10 w-38 md:w-52 h-38 md:h-52 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-32"
            style={{ transform: 'rotate(20deg)' }}
          />
        </motion.div>

        {/* Floral - Bottom Left Corner */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute -bottom-12 -left-8 md:-left-20 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-38"
            style={{ transform: 'rotate(160deg)' }}
          />
        </motion.div>

        {/* Floral - Bottom Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute -bottom-12 -right-8 md:-right-20 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-38"
            style={{ transform: 'rotate(-160deg) scaleX(-1)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sage-700 mb-4">
            Wedding Party
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg font-light">
            The special people standing by our side
          </p>
        </FadeIn>

        {/* Officiator */}
        {weddingParty.officiator && (
          <div className="mb-12">
            <FadeIn delay={0.1}>
              <h3 className="text-3xl font-medium text-center text-sage-800 mb-8">
                Officiator
              </h3>
            </FadeIn>
            
            <div className="max-w-xs mx-auto">
              <FadeIn delay={0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="paper-card bg-white/80 backdrop-blur-sm shadow-md overflow-hidden border border-sage-100/50"
                >
                {/* Photo */}
                <div className="relative h-80 overflow-hidden">
                  {weddingParty.officiator.photo ? (
                    <Image 
                      src={weddingParty.officiator.photo}
                      alt={weddingParty.officiator.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      style={{ objectPosition: "center 15%" }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
                      <span className="text-gray-400 text-lg font-light">Photo Coming Soon</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="text-2xl font-medium text-gray-800 mb-2">
                    {weddingParty.officiator.name}
                  </h4>
                  <p className="text-sage-600 font-normal mb-2">
                    {weddingParty.officiator.role}
                  </p>
                  {weddingParty.officiator.relation && (
                    <p className="text-gray-600 text-sm font-light">
                      {weddingParty.officiator.relation}
                    </p>
                  )}
                </div>
              </motion.div>
            </FadeIn>
            </div>
          </div>
        )}

        {/* Bridesmaids */}
        <div className="mb-12">
          <FadeIn delay={0.3}>
            <h3 className="text-3xl font-medium text-center text-sage-800 mb-8">
              Bridesmaids
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weddingParty.bridesmaids.map((person, index) => (
              <FadeIn key={person.name + index} delay={0.4 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="paper-card bg-white/80 backdrop-blur-sm shadow-md overflow-hidden border border-sage-100/50"
                >
                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    {person.photo ? (
                      <Image 
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        style={person.name === "Sage Kovacs" ? { objectPosition: "center 30%" } : person.name === "Calee Nesler" ? { objectPosition: "center 10%" } : {}}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blush-100 to-blush-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm font-light">Photo Coming Soon</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-normal text-gray-800 mb-2">
                      {person.name}
                    </h4>
                    <p className="text-sage-600 font-normal mb-2">
                      {person.role}
                    </p>
                    {person.relation && (
                      <p className="text-gray-600 text-sm font-light">
                        {person.relation}
                      </p>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Groomsmen */}
        <div>
          <FadeIn delay={0.6}>
            <h3 className="text-3xl font-medium text-center text-sage-800 mb-8">
              Groomsmen
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {weddingParty.groomsmen.map((person, index) => (
              <FadeIn key={person.name + index} delay={0.7 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="paper-card bg-white/80 backdrop-blur-sm shadow-md overflow-hidden border border-sage-100/50"
                >
                  {/* Photo */}
                  <div className="relative h-80 overflow-hidden">
                    {person.photo ? (
                      <Image 
                        src={person.photo}
                        alt={person.name}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        style={person.name === "Lucas Falk" ? { objectPosition: "center 40%" } : {}}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm font-light">Photo Coming Soon</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-normal text-gray-800 mb-2">
                      {person.name}
                    </h4>
                    <p className="text-sage-700 font-normal mb-2">
                      {person.role}
                    </p>
                    {person.relation && (
                      <p className="text-gray-600 text-sm font-light">
                        {person.relation}
                      </p>
                    )}
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

