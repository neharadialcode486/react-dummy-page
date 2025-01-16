/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE0000",
        lightGray: "#F8F8F8",
        gray: "#B6B6B6",
        red:"#FF0000",
        "light-black":"#1E1E1E",
      },
    },
  },
  plugins: [],
};
