/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "curvy-desktop": "url('/src/images/bg-curvy-desktop.svg')",
        arrow: "url('/src/images/icon-arrow.svg')",
        quotes: "url('/src/images/bg-quotes.png')",
      },
      scrollBehavior: {
        smooth: "scroll-behavior: smooth;",
      },
    },
    colors: {
      primary: {
        DEFAULT: "hsl(217, 28%, 15%)",
        background: "hsl(218, 28%, 13%)",
        footer: "hsl(216, 53%, 9%)",
        testimonials: "hsl(219, 30%, 18%)",
      },
      accent: {
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        error: "hsl(0, 100%, 63%)",
      },
      white: "hsl(0, 0%, 100%)",
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ['"Open Sans"', '"sans-serif"'],
      raleway: ["Raleway", '"sans-serif"'],
    },
  },
  plugins: [],
};
