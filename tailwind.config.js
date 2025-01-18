const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pinky: "#eaa9b8",
        whity: "#ebe3e5",
        yellowy: "#f8e0b0",
        bluy: "#a7d3d5",
      },
      fontFamily: {
        agbalumo: ['Agbalumo', 'sans-serif'],
      },

    },
  },
  plugins: [],
});