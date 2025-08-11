/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        niramit: ["Niramit", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          pagebg: "#F3FBF2",
          activelink: "#0F783B",
          nlink: "#212724",
          subheading: "#070707",
          paragraph: "#434343",
          line: "#C5E1CD",
          bg: "#F8F7EF",
          paragraph2: "#000000",
          pheading: "#BE8B45",
          300: colors.green[300], // built-in shade
          400: colors.green[400], // built-in shade
          500: colors.green[500], // built-in shade
          700: colors.green[700],
        },
        sidebar: {
          50: colors.gray[50], // gray-50
          200: colors.slate[200], // slate-200
        },
        text: {
          dark: colors.black,
          light: colors.white,
        },
        textsize: {
          xl: "1.25rem",
          "2xl": "1.5rem",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
