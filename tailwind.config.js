/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f4f6",
        ellipse28:"rgba(0, 158, 226, 0.2)",
        ellipse27:"rgba(226, 132, 0, 0.2)",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
