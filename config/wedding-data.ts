// ============================================
// WEDDING DATA CONFIGURATION
// ============================================
// This file contains all customizable wedding information.
// Simply update this file for each new client!

export const weddingData = {
  // ===== COUPLE INFORMATION =====
  couple: {
    bride: {
      firstName: "Summer",
      lastName: "Smith",
      fullName: "Summer Smith",
    },
    groom: {
      firstName: "James",
      lastName: "Johnson",
      fullName: "James Johnson",
    },
    coupleNames: "James & Summer",
    hashtag: "#JamesAndSummer2025",
  },

  // ===== OUR STORY =====
  story: {
    title: "Our Story",
    howWeMet: "We met on a sunny day in Central Park, both reaching for the last croissant at a coffee cart. Instead of fighting over it, we decided to share it... and the rest is history.",
    engagement: "Michael proposed during a sunset hike at our favorite mountain trail, with champagne hidden in his backpack and our song playing from a portable speaker.",
    quote: "In you, I've found the love of my life and my closest, truest friend.",
  },

  // ===== WEDDING DATE & COUNTDOWN =====
  weddingDate: {
    date: "2026-06-20", // YYYY-MM-DD format
    displayDate: "June 20th, 2026",
    dayOfWeek: "Saturday",
  },

  // ===== EVENT DETAILS =====
  events: [
    {
      name: "Ceremony",
      date: "June 20th, 2026",
      time: "4:00 PM",
      location: {
        venue: "Garden Estate Venue",
        address: "1234 Wedding Lane",
        city: "Port Sanilac, MI 48469",
        googleMapsUrl: "https://maps.google.com/?q=43.4297,-82.5399",
      },
      description: "Join us as we exchange our vows in the beautiful garden.",
    },
    {
      name: "Cocktail Hour",
      date: "June 20th, 2026",
      time: "5:00 PM",
      location: {
        venue: "Garden Estate Venue",
        address: "1234 Wedding Lane",
        city: "Port Sanilac, MI 48469",
        googleMapsUrl: "https://maps.google.com/?q=43.4297,-82.5399",
      },
      description: "Enjoy drinks and hors d'oeuvres on the terrace.",
    },
    {
      name: "Reception",
      date: "June 20th, 2026",
      time: "6:30 PM",
      location: {
        venue: "Garden Estate Venue",
        address: "1234 Wedding Lane",
        city: "Port Sanilac, MI 48469",
        googleMapsUrl: "https://maps.google.com/?q=43.4297,-82.5399",
      },
      description: "Dinner, dancing, and celebration under the stars!",
    },
  ],

  // ===== DRESS CODE =====
  dressCode: {
    code: "Formal / Black Tie Optional",
    description: "We kindly request formal attire. Ladies, feel free to wear long or cocktail dresses. Gentlemen, suits or tuxedos are preferred.",
    colorsToAvoid: ["white", "ivory", "champagne"],
    note: "Please avoid white, ivory, or champagne tones.",
    outdoorNote: "The ceremony will be outdoors on grass - heel stoppers recommended!",
  },

  // ===== TIMELINE =====
  timeline: [
    { time: "4:00 PM", event: "Ceremony Begins" },
    { time: "4:45 PM", event: "Cocktail Hour" },
    { time: "6:00 PM", event: "Grand Entrance" },
    { time: "6:15 PM", event: "First Dance" },
    { time: "6:30 PM", event: "Dinner Service" },
    { time: "7:30 PM", event: "Toasts & Speeches" },
    { time: "8:00 PM", event: "Cake Cutting" },
    { time: "8:15 PM", event: "Open Dancing" },
    { time: "10:30 PM", event: "Last Dance & Send-off" },
  ],

  // ===== REGISTRY =====
  registry: [
    {
      name: "Zola",
      url: "https://www.zola.com/registry",
      icon: "gift",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.com/wedding/registry",
      icon: "shopping-cart",
    },
    {
      name: "Honeyfund",
      url: "https://www.honeyfund.com",
      icon: "plane",
      description: "Help us create amazing honeymoon memories",
    },
  ],

  // ===== TRAVEL & ACCOMMODATIONS =====
  travel: {
    hotels: [
      {
        name: "The Grand Hotel",
        address: "789 Hotel Street, Port Sanilac, MI",
        phone: "(555) 123-4567",
        bookingUrl: "https://example.com",
        blockCode: "DAVIS2025",
        discount: "15% off with code DAVIS2025",
        distance: "0.5 miles from venue",
      },
      {
        name: "Cozy Inn & Suites",
        address: "456 Comfort Ave, Port Sanilac, MI",
        phone: "(555) 987-6543",
        bookingUrl: "https://example.com",
        blockCode: "SARAHMICHAEL",
        discount: "20% off with code SARAHMICHAEL",
        distance: "1.2 miles from venue",
      },
    ],
    airports: [
      {
        name: "Detroit Metropolitan Wayne County Airport (DTW)",
        code: "DTW",
        distance: "90 miles",
        driveTime: "90 minutes",
      },
      {
        name: "Bishop International Airport (FNT)",
        code: "FNT",
        distance: "65 miles",
        driveTime: "70 minutes",
      },
    ],
    parking: {
      available: true,
      details: "Free parking available at the venue. Valet service provided.",
    },
    shuttle: {
      provided: true,
      details: "Complimentary shuttle service from The Grand Hotel to venue at 3:30 PM and return trips at 10:00 PM and 11:00 PM.",
    },
  },

  // ===== WEDDING PARTY =====
  weddingParty: {
    bridesmaids: [
      {
        name: "Emily Thompson",
        role: "Maid of Honor",
        relation: "Sister of the Bride",
        photo: "/images/wedding-party/emily.jpg",
      },
      {
        name: "Jessica Martinez",
        role: "Bridesmaid",
        relation: "Best Friend since College",
        photo: "/images/wedding-party/jessica.jpg",
      },
      {
        name: "Amanda Wilson",
        role: "Bridesmaid",
        relation: "Childhood Friend",
        photo: "/images/wedding-party/amanda.jpg",
      },
    ],
    groomsmen: [
      {
        name: "David Davis",
        role: "Best Man",
        relation: "Brother of the Groom",
        photo: "/images/wedding-party/david.jpg",
      },
      {
        name: "James Cooper",
        role: "Groomsman",
        relation: "College Roommate",
        photo: "/images/wedding-party/james.jpg",
      },
      {
        name: "Robert Lee",
        role: "Groomsman",
        relation: "Lifelong Friend",
        photo: "/images/wedding-party/robert.jpg",
      },
    ],
  },

  // ===== FAQ =====
  faq: [
    {
      question: "Can I bring a plus-one?",
      answer: "If you received a plus-one, their name will be included on your invitation. If you're unsure, please contact us!",
    },
    {
      question: "Are children welcome?",
      answer: "We love your little ones, but we've decided to make this an adults-only celebration. We hope this allows you to have a night to relax and enjoy!",
    },
    {
      question: "Is there parking available?",
      answer: "Yes! Free parking and valet service are available at the venue.",
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer: "The ceremony will be outdoors in the garden. The reception will be in a tented area with heating/cooling. We'll have a backup indoor plan in case of inclement weather.",
    },
    {
      question: "What's the weather typically like in June?",
      answer: "Port Sanilac in June is usually pleasant with temperatures around 70-75°F. We recommend bringing a light jacket for the evening as it can get cooler by the lake.",
    },
    {
      question: "Is the venue wheelchair accessible?",
      answer: "Yes, the venue is fully wheelchair accessible with accessible parking, ramps, and restrooms.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Please let us know about any dietary restrictions or allergies when you RSVP. We'll work with our caterer to accommodate all guests.",
    },
    {
      question: "What time should I arrive?",
      answer: "Please arrive by 3:45 PM to allow time for parking and seating before the 4:00 PM ceremony start.",
    },
  ],

  // ===== CONTACT INFO =====
  contact: {
    dayOfContact: {
      name: "Emily Thompson (Maid of Honor)",
      phone: "(555) 111-2222",
      email: "emily@example.com",
    },
    generalQuestions: {
      email: "wedding@sarahandmichael.com",
    },
  },

  // ===== OPTIONAL SECTIONS =====
  optional: {
    localRecommendations: [
      {
        category: "Restaurants",
        items: [
          { name: "The Fancy Fork", type: "Fine Dining", description: "Amazing tasting menu" },
          { name: "Coastal Catch", type: "Seafood", description: "Fresh seafood with bay views" },
          { name: "Pasta Paradise", type: "Italian", description: "Homemade pasta and wine" },
        ],
      },
      {
        category: "Things to Do",
        items: [
          { name: "Golden Gate Bridge", type: "Landmark", description: "Iconic bridge with walking paths" },
          { name: "Alcatraz Island", type: "Tour", description: "Historic prison tour" },
          { name: "Fisherman's Wharf", type: "Entertainment", description: "Shops, restaurants, and sea lions" },
        ],
      },
    ],
    weekendEvents: [
      {
        name: "Welcome Drinks",
        date: "June 19th, 2026",
        time: "7:00 PM",
        location: "The Rooftop Bar, The Grand Hotel",
        description: "Join us for casual drinks and appetizers the night before the wedding!",
        rsvpRequired: false,
      },
      {
        name: "Farewell Brunch",
        date: "June 21st, 2026",
        time: "10:00 AM",
        location: "The Garden Cafe",
        description: "Let's continue the celebration with a relaxed brunch before everyone heads home.",
        rsvpRequired: true,
      },
    ],
  },
};

export default weddingData;

