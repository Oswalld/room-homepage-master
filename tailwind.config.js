/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/index.js"],
  theme: {
    extend: {
      colors: {
        //prettier-ignore
        "dark-gray": "hsl(0, 0%, 63%)",
        //prettier-ignore
        "black": "hsl(0, 0%, 0%)",
        //prettier-ignore
        "white": "hsl(0, 0%, 100%)",
        //prettier-ignore
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        //prettier-ignore
        "base": "12px",
      },
      fontFamily: {
        //prettier-ignore
        "spartan": ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
