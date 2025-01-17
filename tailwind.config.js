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
      backgroundImage: {
        'gray-gradient': 'linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)',
        'gradient-horizontal': 'linear-gradient(90deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 100%)',
        'white-gradient': 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        "welcome-popup":'url("/src/assets/img/welcom-popup-bg.png")',
      },
    },
  },
  plugins: [],
};
