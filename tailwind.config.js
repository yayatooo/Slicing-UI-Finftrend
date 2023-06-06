/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1440px",
      },
      backgroundImage: {
        desktop: "url('./assets/website.png')",
        mobile: "url('./assets/mobile.png')",
      },
      backgroundColor: {
        primary: "#A8FF35",
        secondary: "#87D322",
        hover: "#8CC83A",
        "black-primary": "#00000",
        "black-scnd": "#2B2B2B",
        "gray-1": "#8B8B8B",
        "gray-2": "#ADADAD",
        "gray-3": "#F5F5F5",
        "gray-4": "#F1F1F1",
      },
      fontFamily: {
        "effra-heavy": ["Effra Heavy", "sans-serif"],
        "effra-light": ["Effra Light", "sans-serif"],
        "effra-medium": ["Effra Medium", "sans-serif"],
        "effra-reguler": ["Effra", "sans-serif"],
      },
      maxWidth: {
        desktop: "1440px",
      },
      rotate: {
        13: "-3deg",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utils = {
        ".bg-hero": {
          "background-image": "url(/assets/website.png)",
        },
      };
      addUtilities(utils);
    }),
  ],
};
