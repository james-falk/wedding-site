"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EventDetails() {
  const { events } = weddingData;
  const venue = events[0].location; // All events are at same location
  const arrivalTime = "3:00 PM";

  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-4xl md:text-6xl text-center text-sage-700 mb-3">
            Event Details
          </h2>
          <p className="text-center text-gray-600 mb-12 text-base md:text-lg font-light">
            Join us for a day of love and celebration
          </p>
        </FadeIn>

        {/* Venue Card */}
        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="paper-card bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden mb-8 border border-sage-100/50"
          >
            {/* Venue Image */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/venue.jpg"
                alt="Wedding Venue"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Venue Details */}
            <div className="p-6 md:p-8">
              <div className="space-y-4 mb-6">
                {/* Arrival Time */}
                <div className="flex items-center text-gray-700 text-lg">
                  <svg
                    className="w-6 h-6 mr-4 text-sage-500 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Please Arrive By</p>
                    <p className="font-light">{arrivalTime}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start text-gray-700 text-lg">
                  <svg
                    className="w-6 h-6 mr-4 text-sage-500 mt-1 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="font-light">{venue.address}</p>
                    <p className="font-light">{venue.city}</p>
                  </div>
                </div>
              </div>

              {/* View on Map Button */}
              <div className="text-center">
                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-600 font-normal transition-colors shadow-sm"
                >
                  View on Map
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </FadeIn>

        {/* Dress Code */}
        <FadeIn delay={0.6}>
          <div className="paper-card mt-12 bg-gradient-to-br from-sage-50/50 to-cream-100/50 backdrop-blur-sm p-6 md:p-8 border border-sage-100/50">
            <h3 className="text-xl md:text-2xl font-medium text-sage-800 mb-4 text-center">
              Dress Code
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-medium text-sage-700 mb-3">
                {weddingData.dressCode.code}
              </p>
              <p className="text-gray-700 mb-3 text-sm md:text-base font-light">
                {weddingData.dressCode.description}
              </p>
              {weddingData.dressCode.note && (
                <p className="text-sage-600 font-normal text-sm">
                  {weddingData.dressCode.note}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

