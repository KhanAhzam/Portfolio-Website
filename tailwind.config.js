/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // To use google fonts with Tailwind first import into index.css and then add here under extend
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        baloo2: ["Baloo 2", "sans-serif"],
        
        // Being Used
        urbanist: ["Urbanist", "sans-serif"],

        manrope: ["Manrope", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        "smaller": "400px",
        xs: "450px",
        "3xl": "1650px",
        "4xl": "1850px",
        "large": "1150px",
      }
    },
  },
  plugins: [],
}
