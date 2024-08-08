/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        grotesque: ['"Darker Grotesque"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        gilroy: ["Gilroy-Bold", "sans-serif"],
        exo1: ["Exo ", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
        transitionProperty: {
          "border-shadow": "border-color, box-shadow", // Custom transition property
        },
        transitionDuration: {
          150: "150ms", // Custom transition duration
        },
        transitionTimingFunction: {
          "ease-in-out": "ease-in-out", // Custom timing function
        },
      },
    },
  },
  plugins: [],
};
