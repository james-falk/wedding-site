// ============================================
// THEME CONFIGURATION
// ============================================
// Customize colors, fonts, and styling here for each client

export const theme = {
  // ===== COLOR PALETTE =====
  colors: {
    primary: {
      light: "#e0f2fe", // Very light sky blue
      main: "#7dd3fc", // Soft sky blue
      dark: "#0284c7", // Gentle medium blue
    },
    secondary: {
      light: "#dbeafe", // Pale blue
      main: "#93c5fd", // Light blue
      dark: "#3b82f6", // Soft blue
    },
    accent: {
      gold: "#fcd34d", // Soft golden yellow
      teal: "#67e8f9", // Light cyan
      aqua: "#a5f3fc", // Pale aqua
    },
    neutral: {
      white: "#ffffff",
      cream: "#f8fafc", // Very light cool tint
      beige: "#f1f5f9", // Soft cool gray
      gray: "#e2e8f0",
      darkGray: "#475569",
      black: "#1e293b",
    },
  },

  // ===== FONTS =====
  fonts: {
    heading: "'Playfair Display', serif", // Elegant serif for all text
    body: "'Playfair Display', serif", // Elegant serif for body text
    script: "'Allura', cursive", // Script font for special touches
  },

  // ===== ANIMATION SETTINGS =====
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 1.2,
    },
    easing: {
      smooth: [0.43, 0.13, 0.23, 0.96],
      bounce: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

export default theme;

