"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const accommodations = [
  {
    name: "Raymond House Inn",
    address: "111 S Ridge St, Port Sanilac, MI 48469",
    phone: "(810) 622-8800",
    url: "https://www.raymondhouseinn.com/",
    description: "Victorian-style B&B near downtown",
  },
  {
    name: "Holland's Little House In the Country B & B",
    address: "1995 N Huron View, Port Sanilac, MI 48469",
    url: "https://www.google.com/search?q=Holland%27s+Little+House+In+the+Country+B+%26+B+Port+Sanilac+MI",
    description: "Cozy countryside bed & breakfast",
  },
  {
    name: "Lake Huron Lodge",
    address: "7175 Huron Ave, Lexington, MI 48450",
    phone: "(810) 359-7802",
    url: "https://www.lakehuronlodge.com/",
    description: "Top-rated lodge with easy beach access",
  },
  {
    name: "Inn the Garden Bed & Breakfast",
    address: "7156 Huron Ave, Lexington, MI 48450",
    phone: "(810) 359-8966",
    url: "https://www.inngarden.com/",
    description: "Highly reviewed B&B with gardens",
  },
  {
    name: "Lake Winds Motel",
    address: "6997 Lakeshore Rd, Lexington, MI 48450",
    phone: "(810) 359-5196",
    url: "https://www.lakewindsmotelthebeachgetaway.com/",
    description: "Beachside motel with great reviews",
  },
  {
    name: "Lakeview Hills Golf & Resort",
    address: "6560 East Peck Road, Lexington, MI 48450",
    phone: "(810) 359-7333",
    url: "https://www.lakeviewhills.com/",
    description: "Golf resort with on-site lodging, dining & spa",
  },
  {
    name: "Butler Bed & Breakfast",
    address: "5774 Main St, Lexington, MI 48450",
    url: "https://www.butlerphotosbb.com/",
    description: "Elegant historic B&B",
  },
  {
    name: "Lexington's LillyPad",
    address: "3832 Lakeshore Rd, Lexington, MI 48450",
    phone: "(810) 404-2771",
    url: "https://lexingtonslillypad.wixsite.com/my-site-1",
    description: "Popular mid-range motel",
  },
  {
    name: "Lusky's Lakefront Cottages",
    address: "8949 Lakeshore Rd, Lexington, MI 48450",
    phone: "(810) 327-6889",
    url: "https://www.luskys.com/",
    description: "Lakefront cottage rentals",
  },
  {
    name: "Wipp Inn",
    address: "2927 S Lakeshore Rd, Applegate, MI 48401",
    phone: "(810) 359-2800",
    url: "https://www.wippinn.com/",
    description: "Highly-rated lodging near lakeshore",
  },
  {
    name: "Holiday Inn Express & Suites Port Huron",
    address: "2021 Water Street, Port Huron, MI 48060",
    phone: "(810) 662-3400",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/port-huron/phnes/hoteldetail",
    description: "Modern hotel with pool & free breakfast",
  },
  {
    name: "Days Inn & Suites Port Huron",
    address: "Port Huron, MI",
    url: "https://www.wyndhamhotels.com/days-inn/port-huron-michigan/days-inn-and-suites-port-huron/overview",
    description: "Comfortable chain hotel accommodations",
  },
  {
    name: "Quality Inn Port Huron",
    address: "Port Huron, MI",
    url: "https://www.choicehotels.com/michigan/port-huron/quality-inn-hotels/mi131",
    description: "Reliable chain hotel with amenities",
  },
  {
    name: "DoubleTree by Hilton Port Huron",
    address: "Port Huron, MI",
    url: "https://www.hilton.com/en/hotels/phntedt-doubletree-port-huron/",
    description: "Upscale hotel with full service amenities",
  },
  {
    name: "J & MH Westpark Inn",
    address: "440 Sanilac Rd, Sandusky, MI 48471",
    url: "https://www.google.com/search?q=J+%26+MH+Westpark+Inn+Sandusky+MI",
    description: "Affordable inn near central Sandusky",
  },
  {
    name: "Thumb Heritage Inn",
    address: "405 Sanilac Rd, Sandusky, MI 48471",
    phone: "(810) 648-4811",
    url: "https://www.thumbheritageinn.com/",
    description: "Simple budget motel",
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
            className="object-contain opacity-80"
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
            className="object-contain opacity-80"
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
            className="object-contain opacity-80"
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
            className="object-contain opacity-80"
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
            className="object-contain opacity-75"
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
            className="object-contain opacity-75"
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
              <FadeIn key={accommodation.name} delay={0.2 + index * 0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="paper-card block bg-white/80 backdrop-blur-sm shadow-md p-6 h-full group hover:shadow-lg transition-all border border-sage-100/50"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h4 className="text-lg font-normal text-gray-800 mb-3">
                        {accommodation.name}
                      </h4>
                      <p className="text-sm text-gray-600 font-light mb-2">
                        {accommodation.address}
                      </p>
                      {accommodation.phone && (
                        <p className="text-sm text-sage-600 font-light mb-2">
                          {accommodation.phone}
                        </p>
                      )}
                      {accommodation.description && (
                        <p className="text-sm text-gray-500 font-light italic mt-3">
                          {accommodation.description}
                        </p>
                      )}
                    </div>
                    
                    {accommodation.url && (
                      <div className="mt-4 pt-4 border-t border-sage-100">
                        <a
                          href={accommodation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-sage-600 font-normal hover:text-sage-700 inline-flex items-center gap-1"
                        >
                          {accommodation.url.includes('lakeviewhills.com') ? 'Visit Website' : 'View on Google Maps'}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
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

