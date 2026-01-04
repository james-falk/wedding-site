"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";

export default function EventDetails() {
  const { events } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-4xl md:text-6xl text-center text-sky-800 mb-3">
            Event Details
          </h2>
          <p className="text-center text-gray-600 mb-12 text-base md:text-lg">
            Join us for a day of love and celebration
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <FadeIn key={event.name} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden h-full"
              >
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100 to-blue-100 opacity-20 rounded-full -mr-16 -mt-16" />
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-sky-800 mb-3">
                    {event.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-3 text-sky-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-3 text-sky-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start text-gray-700">
                      <svg
                        className="w-5 h-5 mr-3 text-rose-500 mt-1 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <div>
                        <p className="font-medium">{event.location.venue}</p>
                        <p className="text-sm">{event.location.address}</p>
                        <p className="text-sm">{event.location.city}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

                  <a
                    href={event.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors text-sm"
                  >
                    View on Map
                    <svg
                      className="w-4 h-4 ml-2"
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
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Dress Code */}
        <FadeIn delay={0.6}>
          <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
              👗 Dress Code
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg font-semibold text-gray-800 mb-3">
                {weddingData.dressCode.code}
              </p>
              <p className="text-gray-700 mb-3 text-sm md:text-base">
                {weddingData.dressCode.description}
              </p>
              {weddingData.dressCode.note && (
                <p className="text-sky-600 font-medium mb-2 text-sm">
                  {weddingData.dressCode.note}
                </p>
              )}
              {weddingData.dressCode.outdoorNote && (
                <p className="text-xs md:text-sm text-gray-600 italic">
                  {weddingData.dressCode.outdoorNote}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

