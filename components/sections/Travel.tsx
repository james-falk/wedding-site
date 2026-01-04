"use client";

import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion } from "framer-motion";

export default function Travel() {
  const { travel } = weddingData;

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-5xl md:text-7xl text-center text-sky-800 mb-4">
            Travel & Stay
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Everything you need to know about getting here and where to stay
          </p>
        </FadeIn>

        {/* Hotels */}
        <div className="mb-16">
          <FadeIn delay={0.1}>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              🏨 Accommodations
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto italic">
              We sincerely apologize, but the hotels in the area did not offer hotel blocks. You can still book at the following places near the venue.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            {travel.hotels.map((hotel, index) => (
              <FadeIn key={hotel.name} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 h-full"
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {hotel.name}
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700 flex items-start">
                      <svg
                        className="w-5 h-5 mr-3 text-sky-500 mt-1 flex-shrink-0"
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
                      {hotel.address}
                    </p>

                    <p className="text-gray-700 flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-sky-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      {hotel.phone}
                    </p>

                    <p className="text-gray-700 flex items-center">
                      <svg
                        className="w-5 h-5 mr-3 text-sky-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                      </svg>
                      {hotel.distance}
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded-lg p-4 mb-6">
                    <p className="font-semibold text-sky-700 mb-2">
                      {hotel.discount}
                    </p>
                    <p className="text-sm text-gray-700">
                      Use code: <span className="font-bold">{hotel.blockCode}</span>
                    </p>
                  </div>

                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-500 hover:text-sky-700 font-medium transition-colors"
                  >
                    Book Now
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
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Parking */}
        {travel.parking.available && (
          <FadeIn delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8 max-w-2xl mx-auto"
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-8 h-8 mr-3 text-sky-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Parking
                </h3>
                <p className="text-gray-700">{travel.parking.details.replace('Valet service provided. ', '').replace('Valet service provided', '')}</p>
              </motion.div>
            </FadeIn>
          )}
      </div>
    </section>
  );
}

