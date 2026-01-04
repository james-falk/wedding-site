"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";

export default function GuestAmenities() {
  const amenities = [
    {
      title: "Photo Booth",
      icon: "📸",
      description: "Capture fun memories with our photo booth! Props and instant prints included so you can take home a keepsake from our special day.",
    },
    {
      title: "Cigar Bar",
      icon: "🚬",
      description: "Enjoy a premium selection of cigars at our outdoor cigar bar. A perfect way to relax and celebrate with friends.",
    },
    {
      title: "Champagne Table",
      icon: "🥂",
      description: "Toast to love at our elegant champagne station featuring a selection of bubbly for you to enjoy throughout the evening.",
    },
    {
      title: "Open Bar with Signature Drinks",
      icon: "🍹",
      description: "Enjoy our full open bar featuring custom signature cocktails crafted especially for our celebration. Cheers to a night of fun!",
    },
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-4xl md:text-6xl text-center text-sky-800 mb-3">
            For Our Guests
          </h2>
          <p className="text-center text-gray-600 mb-12 text-base md:text-lg">
            Special amenities and entertainment to make your experience unforgettable
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {amenities.map((amenity, index) => (
            <FadeIn key={amenity.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center h-full"
              >
                <div className="text-6xl mb-4">{amenity.icon}</div>
                <h3 className="text-2xl font-bold text-sky-800 mb-4">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-gray-700 text-lg">
              We can't wait to celebrate with you and want to ensure you have an amazing experience. 
              More details and surprises to come!
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

