"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import { motion, AnimatePresence } from "framer-motion";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "",
    guests: "1",
    meal: "",
    songRequest: "",
    dietaryRestrictions: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        attending: "",
        guests: "1",
        meal: "",
        songRequest: "",
        dietaryRestrictions: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pt-24 md:pt-28 pb-12 sm:pb-20 md:pb-32 px-4 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-center text-sky-800 mb-3 sm:mb-4">
            RSVP
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            We can't wait to celebrate with you!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Attending */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Will you be attending? *
                    </label>
                    <select
                      name="attending"
                      required
                      value={formData.attending}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                    >
                      <option value="">Please select</option>
                      <option value="yes">Joyfully accepts</option>
                      <option value="no">Regretfully declines</option>
                    </select>
                  </div>

                  {formData.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-6"
                    >
                      {/* Number of Guests */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Number of Guests *
                        </label>
                        <select
                          name="guests"
                          required
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>

                      {/* Meal Choice */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Meal Preference *
                        </label>
                        <select
                          name="meal"
                          required
                          value={formData.meal}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                        >
                          <option value="">Please select</option>
                          <option value="beef">Beef</option>
                          <option value="chicken">Chicken</option>
                          <option value="fish">Fish</option>
                          <option value="vegetarian">Vegetarian</option>
                          <option value="vegan">Vegan</option>
                        </select>
                      </div>

                      {/* Dietary Restrictions */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Dietary Restrictions or Allergies
                        </label>
                        <textarea
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none resize-none"
                          placeholder="Please let us know of any dietary restrictions..."
                        />
                      </div>

                      {/* Song Request */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Song Request 🎵
                        </label>
                        <input
                          type="text"
                          name="songRequest"
                          value={formData.songRequest}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
                          placeholder="What song will get you on the dance floor?"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3"
                          viewBox="0 0 24 24"
                        >
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
                        Submitting...
                      </span>
                    ) : (
                      "Submit RSVP"
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                  >
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Your RSVP has been received. We can't wait to celebrate with you!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

