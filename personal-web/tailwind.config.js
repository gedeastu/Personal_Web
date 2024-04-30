/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ubuntu": ['Ubuntu','sans-serif'],
        "raleway": ['Raleway','sans-serif']
      }
    },
    colors: {
      'light-grayish-orange': '#f2efe8',
      'very-dark-gray':'#222222',
      'soft-yellow': '#F9DB4B',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    }
  },
  plugins: [],
}