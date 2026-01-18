"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Countdown from "@/components/Countdown";
import weddingData from "@/config/wedding-data";

// Preview sections data with big immersive images
const previewSections = [
  {
    title: "Our Story",
    subtitle: "How it all began",
    description: "From the moment we met to our magical engagement, discover the journey that brought us here.",
    href: "/story",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d2627?w=1920&q=80",
    delay: 0.2,
  },
  {
    title: "Event Details",
    subtitle: "Ceremony & Reception",
    description: "Join us for our ceremony, cocktail hour, and reception. Find venue details and what to expect.",
    href: "/details",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
    delay: 0.3,
  },
  {
    title: "Timeline",
    subtitle: "Day of Schedule",
    description: "See the full schedule of events from ceremony to send-off. Plan your day with us.",
    href: "/timeline",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80",
    delay: 0.4,
  },
  {
    title: "Registry",
    subtitle: "Gift Registry",
    description: "Your presence is the greatest gift, but if you wish to honor us with something special.",
    href: "/registry",
    image: "https://images.unsplash.com/photo-1513279922550-d8ee8cc18288?w=1920&q=80",
    delay: 0.5,
  },
  {
    title: "Travel & Stay",
    subtitle: "Accommodations",
    description: "Hotels, airports, parking, and shuttle information to help you plan your visit.",
    href: "/travel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
    delay: 0.6,
  },
  {
    title: "Wedding Party",
    subtitle: "Our Loved Ones",
    description: "Meet the special people standing by our side on this incredible day.",
    href: "/party",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80",
    delay: 0.7,
  },
];

// Large immersive photo section component
function ImmersivePhotoSection({ 
  image, 
  title, 
  subtitle, 
  description, 
  href,
  reverse = false 
}: { 
  image: string; 
  title: string; 
  subtitle: string;
  description: string; 
  href: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative min-h-screen h-screen md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sky-200 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
        >
          {subtitle}
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 drop-shadow-2xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href={href}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-full hover:bg-white hover:text-sky-700 transition-all duration-300 font-medium text-base sm:text-lg group"
          >
            <span className="flex items-center gap-2">
              Learn More
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Cascading Beach Background Section - All content on Port Sanilac Beach */}
      <div className="relative">
        {/* Fixed Beach Background */}
        <div 
          className="fixed inset-0 top-0 w-full h-full bg-center -z-10"
          style={{ 
            backgroundImage: "url('/images/field.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Countdown Section */}
        <section className="relative py-10 sm:py-12 border-t-2 border-sage-200/50">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sage-200 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
                Counting down to our special day
              </p>
              <Countdown targetDate={weddingData.weddingDate.date} />
            </motion.div>
          </div>
        </section>

        {/* Horizontal Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sage-300/40 to-transparent" />

        {/* Event Details Section */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
          >
            <p className="text-sage-200 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              The Celebration
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 drop-shadow-2xl">
              Event Details
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Join us for an enchanting day filled with love, laughter, and memories.
            </p>
            <Link
              href="/details"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-sage-200/70 text-white rounded-full hover:bg-sage-100 hover:text-sage-800 transition-all duration-300 font-medium text-base sm:text-lg group"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Horizontal Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sage-300/40 to-transparent" />

        {/* Wedding Party Section */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
          >
            <p className="text-sage-200 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Our Circle
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 drop-shadow-2xl">
              Wedding Party
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Meet the incredible friends and family who have supported us, stood by us, and will be standing with us on our special day.
            </p>
            <Link
              href="/party"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-sage-200/70 text-white rounded-full hover:bg-sage-100 hover:text-sage-800 transition-all duration-300 font-medium text-base sm:text-lg group"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Horizontal Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sage-300/40 to-transparent" />

        {/* Travel & Stay Section */}
        <section className="relative py-12 sm:py-16">
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
          >
            <p className="text-sage-200 text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Plan Your Visit
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 drop-shadow-2xl">
              Travel & Stay
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Check out local hotels and accommodations in the area.
            </p>
            <Link
              href="/travel"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-sage-200/70 text-white rounded-full hover:bg-sage-100 hover:text-sage-800 transition-all duration-300 font-medium text-base sm:text-lg group"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Horizontal Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sage-300/40 to-transparent" />

        {/* Final CTA Section */}
        <section className="relative py-14 sm:py-20">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-4 sm:px-6"
          >
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-white mb-6 sm:mb-8 drop-shadow-2xl">
              Can't Wait to See You
            </h2>
            <Link
              href="/rsvp"
              className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-sage-500 text-white rounded-full hover:bg-sage-600 transition-all duration-300 font-bold text-lg sm:text-xl shadow-2xl hover:shadow-sage-400/50 hover:scale-105"
            >
              RSVP Today
            </Link>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-cream-100 to-cream-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-script text-3xl sm:text-4xl text-sage-700 mb-4">
            {weddingData.couple.coupleNames}
          </p>
          <p className="text-gray-600 mb-3 text-sm sm:text-base">
            {weddingData.weddingDate.displayDate} • Port Sanilac, Michigan
          </p>
        </div>
        {/* Copyright in bottom left */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
          <p className="text-sand-300 text-xs">
            © 2026 James Falk. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
