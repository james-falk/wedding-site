"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const accommodations = [
  {
    name: "Roots to Rise Retreat",
    url: "https://www.micasastays.com/listings/306937?start=2026-04-17&end=2026-04-19&numberOfGuests=1",
  },
  {
    name: "Lake View Loft",
    url: "https://www.micasastays.com/listings/343234?start=2026-04-17&end=2026-04-19&numberOfGuests=1",
  },
  {
    name: "Walk to Bar, Shop, and DT",
    url: "https://www.micasastays.com/listings/306902",
  },
  {
    name: "Main St Retreat",
    url: "https://www.micasastays.com/listings/306872?start=2026-04-",
  },
  {
    name: "Paradise Cove",
    url: "https://www.micasastays.com/listings/306927?start=2026-04-17&end=2026-04-19&numberOfGuests=116&end=2026-04-20&numberOfGuests=1",
  },
  {
    name: "Port Paradise",
    url: "https://www.micasastays.com/listings/306913",
  },
  {
    name: "Lake St Escape",
    url: "https://www.micasastays.com/listings/306908",
  },
  {
    name: "Lakefront 3BD Home",
    url: "https://www.micasastays.com/listings/306922",
  },
];

export default function Travel() {
  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Subtle Floral - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -top-8 -left-8 md:-left-16 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(10deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute -top-8 -right-8 md:-right-16 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(-10deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-8 -left-8 md:-left-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(150deg)' }}
          />
        </motion.div>

        {/* Subtle Floral - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-8 -right-8 md:-right-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-35"
            style={{ transform: 'rotate(-150deg)' }}
          />
        </motion.div>

        {/* Additional Floral - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute top-1/3 -left-6 md:-left-8 w-32 md:w-40 h-32 md:h-40 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-30"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>

        {/* Additional Floral - Middle Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/2 -right-6 md:-right-8 w-32 md:w-40 h-32 md:h-40 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-30"
            style={{ transform: 'rotate(-45deg)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sage-700 mb-4">
            Travel & Stay
          </h2>
          <p className="text-center text-gray-700 mb-6 text-base md:text-lg font-light max-w-3xl mx-auto">
            We sincerely apologize, but the hotels in the area did not offer hotel blocks. You can still book at the following places near the venue.
          </p>
        </FadeIn>

        {/* Accommodations */}
        <div className="mb-16">
          <FadeIn delay={0.1}>
            <h3 className="text-3xl font-medium text-sage-800 mb-8 text-center">
              Local Accommodations
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((accommodation, index) => (
              <FadeIn key={accommodation.name} delay={0.2 + index * 0.1}>
                <motion.a
                  href={accommodation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="paper-card block bg-white/80 backdrop-blur-sm shadow-md p-6 h-full group hover:shadow-lg transition-all border border-sage-100/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-normal text-gray-800 mb-2 group-hover:text-sage-600 transition-colors">
                        {accommodation.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-light">Port Sanilac, MI</p>
                    </div>
                    <svg
                      className="w-5 h-5 text-sage-500 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-sage-100">
                    <span className="text-sm text-sage-600 font-normal">
                      View Details & Book →
                    </span>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

