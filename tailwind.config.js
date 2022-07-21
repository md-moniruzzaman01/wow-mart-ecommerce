/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],


  daisyui: {
    themes: [
 
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
