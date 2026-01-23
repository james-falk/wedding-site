"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GuestAmenities() {
  const amenities = [
    {
      title: "Photo Booth",
      description: "Capture fun memories with our photo booth! Props and instant prints included so you can take home a keepsake from our special day.",
      svg: (
        <svg className="w-16 h-16 text-sage-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M7 4v16M17 4v16" />
        </svg>
      ),
    },
    {
      title: "Cigar Bar",
      description: "Enjoy a premium selection of cigars at our outdoor cigar bar. A perfect way to relax and celebrate with friends.",
      svg: (
        <svg className="w-16 h-16 text-sage-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 12h16" />
          <path d="M4 10h16" />
          <path d="M4 14h16" />
          <circle cx="6" cy="12" r="1.5" fill="currentColor" />
          <path d="M18 8c0-2 1-3 2-3M20 8c0-2 1-3 2-3" />
        </svg>
      ),
    },
    {
      title: "Open Bar",
      description: "Enjoy our full open bar featuring custom signature cocktails crafted especially for our celebration. Cheers to a night of fun!",
      svg: (
        <svg className="w-16 h-16 text-sage-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 11l9-9 9 9-9 2-9-2z" />
          <path d="M12 11v10" />
          <rect x="10" y="21" width="4" height="2" />
          <circle cx="12" cy="6" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Subtle Floral - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -top-8 -left-8 md:-left-12 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-10deg)' }}
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
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(15deg)' }}
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
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(145deg)' }}
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
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-145deg)' }}
          />
        </motion.div>

        {/* Extra Floral - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/3 -left-4 md:left-2 w-28 md:w-36 h-28 md:h-36 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-70"
            style={{ transform: 'rotate(35deg)' }}
          />
        </motion.div>

        {/* Extra Floral - Middle Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute top-2/3 -right-4 md:right-2 w-28 md:w-36 h-28 md:h-36 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-70"
            style={{ transform: 'rotate(-40deg)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-4xl md:text-6xl text-center text-sage-700 mb-3">
            For Our Guests
          </h2>
          <p className="text-center text-gray-600 mb-12 text-base md:text-lg font-light">
            Special amenities and entertainment to make your experience unforgettable
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((amenity, index) => (
            <FadeIn key={amenity.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="paper-card bg-white/80 backdrop-blur-sm shadow-md p-8 text-center h-full border border-sage-100/50"
              >
                <div className="flex justify-center mb-4">{amenity.svg}</div>
                <h3 className="text-2xl font-medium text-sage-800 mb-4">
                  {amenity.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  {amenity.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="paper-card mt-12 bg-gradient-to-r from-sage-50 to-cream-100 p-6 md:p-8 text-center border border-sage-100/50">
            <p className="text-gray-700 text-lg font-light">
              We can't wait to celebrate with you and want to ensure you have an amazing experience. 
              More details and surprises to come!
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

