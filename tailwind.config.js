/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FBBD23",

          "secondary": "#191D24",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#ffffff",

          "info": "#3ABFF8",

          "success": "#b5b5b3",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],



  // theme: {
  //   extend: {},
  // },
  // plugins: [],
}
