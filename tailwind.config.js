/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        b1:"var(--layoutback)",
        b2:"var(--layoutback2)"
      }
    },
  },
    plugins: [nextui()],
    darkMode: 'dark1',
};
