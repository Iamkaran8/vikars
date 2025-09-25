/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        cream : "#FCF3DE",
        forest : "#124029",
        mint : "#E4FFCD",
        coral: "#E95D5C",
        gray : "#b3b6bf",
        text: "#1240299d"
      },
      fontSize :{
        '14' : "14px",
        '16' : "16px",
        '20' : "20px",
        '24' : "24px",
        '25' : "25px",
        '26' : "26px",
        '32' : "32px",
        '36' : "36px",
        '38' : "38px",
        '40' : "40px",
        '48' : "48px",
        '64' : "64px",
      },
      fontFamily: {
       inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}