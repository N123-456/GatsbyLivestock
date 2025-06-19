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
          light: colors.green[300], // Tailwind's green-300
          DEFAULT: colors.green[400], // green-400
          dark: colors.green[500], // green-500
        },
        sidebar: {
          bg: colors.gray[50], // gray-50
          border: colors.slate[200], // slate-200
        },
        text: {
          dark: colors.black,
          light: colors.white,
        },
      },
    },
  },
  plugins: [],
};
