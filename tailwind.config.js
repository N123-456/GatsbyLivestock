/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
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
};
