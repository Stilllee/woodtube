/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      colors: {
        brand: "#F5D38C",
        black: "#0F0F0F",
        darkGray: "#222222",
      },
    },
  },
  plugins: [],
};
