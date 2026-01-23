"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    plus_one: "",
    comment: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("yP6S4QME5en-1ScrF");

      // Send email using EmailJS
      await emailjs.send(
        "marriedasfalk", // Service ID
        "wedding_rsvp",  // Template ID
        {
          name: formData.name,
          email: formData.email,
          attending: formData.attending,
          plus_one: formData.plus_one,
          comment: formData.comment,
        }
      );

      // Success - continue with animation
      setIsSubmitting(false);
      setIsClosing(true);

      setTimeout(() => {
        setFlapOpen(false);
        setIsOpen(false);
        setIsFlyingAway(true); // Start flying away immediately
      }, 1000);

      setTimeout(() => {
        setIsFlyingAway(false);
        setIsClosing(false);
        setIsSubmitted(true); // Show thank you message
      }, 2500);
    } catch (error) {
      console.error("Failed to send RSVP:", error);
      setIsSubmitting(false);
      alert("Failed to send RSVP. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnvelopeClick = () => {
    if (isOpen || flapOpen || isSubmitted) return;
    
    setFlapOpen(true);
    
    setTimeout(() => {
      setIsOpen(true);
    }, 800);
  };

  return (
    <section className="pt-24 md:pt-28 pb-20 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Floral - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -top-12 -left-8 md:-left-16 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 1.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(-15deg)' }}
          />
        </motion.div>

        {/* Floral - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-12 -right-8 md:-right-16 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-80"
            style={{ transform: 'rotate(20deg)' }}
          />
        </motion.div>

        {/* Floral - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-12 -left-8 md:-left-16 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-75"
            style={{ transform: 'rotate(150deg)' }}
          />
        </motion.div>

        {/* Floral - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-12 -right-8 md:-right-16 w-48 md:w-64 h-48 md:h-64 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 4.png"
            alt=""
            fill
            className="object-contain opacity-75"
            style={{ transform: 'rotate(-150deg)' }}
          />
        </motion.div>

        {/* Extra Floral - Middle Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/3 -left-6 md:left-2 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/Floral 2.png"
            alt=""
            fill
            className="object-contain opacity-70"
            style={{ transform: 'rotate(45deg)' }}
          />
        </motion.div>

        {/* Extra Floral - Middle Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-2/3 -right-6 md:right-2 w-32 md:w-44 h-32 md:h-44 pointer-events-none z-0"
        >
          <Image
            src="/images/floral 3.png"
            alt=""
            fill
            className="object-contain opacity-70"
            style={{ transform: 'rotate(-50deg)' }}
          />
        </motion.div>

        <FadeIn>
          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-center text-sage-700 mb-3 sm:mb-4">
            RSVP
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg font-light">
            We can't wait to celebrate with you!
          </p>
        </FadeIn>

        {/* Main container */}
        <div className="relative w-full max-w-3xl mx-auto" style={{ minHeight: "600px" }}>
          
          {/* Thank You Message - shown after successful submission */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="font-script text-4xl md:text-6xl text-sage-700 mb-6">
                  Thank You!
                </h3>
                <p className="text-lg md:text-xl text-gray-700 font-light mb-4">
                  We've received your RSVP
                </p>
                <p className="text-base md:text-lg text-gray-600 font-light">
                  Can't wait to celebrate with you!
                </p>
              </motion.div>
            </motion.div>
          )}

          {!isSubmitted && (
            <>
          {/* Flying away animation - envelope appears smaller and spins to top right */}
          <AnimatePresence>
            {isFlyingAway && (
              <motion.div
                className="absolute top-1/2 left-1/2 w-full z-50"
                initial={{ opacity: 1, y: 0, x: "-50%", scale: 0.5, rotate: 0 }}
                animate={{
                  opacity: 0,
                  y: -600,
                  x: "150%",
                  rotate: 360,
                  scale: 0.2,
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut"
                }}
              >
                <img
                  src="/images/envelope.png"
                  alt="Wedding RSVP Envelope"
                  className="w-full h-auto drop-shadow-2xl"
                  style={{ borderRadius: "12px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!isFlyingAway && (
            <div className="relative">
              {/* Form - appears after envelope slides down */}
              <AnimatePresence>
                {(isOpen || isClosing) && (
                  <motion.div
                    className="relative w-full mb-4 z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={
                      isOpen && !isClosing
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: -50 }
                    }
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: isOpen && !isClosing ? 0.4 : 0,
                    }}
                  >
                    <motion.div
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mx-auto px-8 md:px-16 py-6"
                      style={{ maxWidth: "650px" }}
                    >
                      {/* Letter Paper */}
                      <div
                        className="paper-card bg-gradient-to-b from-cream-50 to-amber-50/30 shadow-xl p-6 relative border border-sage-200/40"
                      >
                        {/* Elegant header line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-300 to-transparent" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xs">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-3 py-1.5 text-sm rounded border border-sage-200 bg-white/80 focus:border-sage-500 focus:ring-1 focus:ring-sage-200 transition-all outline-none"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xs">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-1.5 text-sm rounded border border-sage-200 bg-white/80 focus:border-sage-500 focus:ring-1 focus:ring-sage-200 transition-all outline-none"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xs">
                              Will you be attending? *
                            </label>
                            <select
                              name="attending"
                              required
                              value={formData.attending}
                              onChange={handleChange}
                              className="w-full px-3 py-1.5 text-sm rounded border border-sage-200 bg-white/80 focus:border-sage-500 focus:ring-1 focus:ring-sage-200 transition-all outline-none"
                            >
                              <option value="">Please select</option>
                              <option value="yes">Joyfully accepts</option>
                              <option value="no">Regretfully declines</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xs">
                              If given a plus one, will they be attending?
                            </label>
                            <select
                              name="plus_one"
                              value={formData.plus_one}
                              onChange={handleChange}
                              className="w-full px-3 py-1.5 text-sm rounded border border-sage-200 bg-white/80 focus:border-sage-500 focus:ring-1 focus:ring-sage-200 transition-all outline-none"
                            >
                              <option value="">Please select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                              <option value="n/a">Not applicable</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xs">
                              Comments (Please share any dietary restrictions or allergies)
                            </label>
                            <textarea
                              name="comment"
                              value={formData.comment}
                              onChange={handleChange}
                              rows={3}
                              className="w-full px-3 py-1.5 text-sm rounded border border-sage-200 bg-white/80 focus:border-sage-500 focus:ring-1 focus:ring-sage-200 transition-all outline-none resize-none"
                              placeholder="Any additional comments..."
                            />
                          </div>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-2.5 rounded-full font-normal text-sm transition-all shadow-md mt-4 ${
                              isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-sage-600 hover:bg-sage-700 text-white"
                            }`}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center">
                                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              "Submit RSVP"
                            )}
                          </motion.button>
                        </form>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Envelope */}
              <div
                className={`w-full ${!flapOpen ? "cursor-pointer" : ""}`}
                onClick={handleEnvelopeClick}
              >
                <VintageEnvelope isOpen={flapOpen} />
                
                {!flapOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sage-600 text-sm font-light mt-4"
                  >
                    Click envelope to open
                  </motion.p>
                )}
              </div>
            </div>
          )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function VintageEnvelope({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <motion.img
        src="/images/envelope.png"
        alt="Wedding RSVP Envelope"
        className="w-full h-auto drop-shadow-2xl"
        style={{ borderRadius: "12px" }}
        initial={false}
        animate={
          isOpen
            ? {
                y: 600,
                opacity: 0,
              }
            : {
                y: 0,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      />
    </div>
  );
}
