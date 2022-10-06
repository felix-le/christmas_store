/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      base: ['16px', '24px'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: colors.black,
        white: colors.white,
        current: 'currentColor',
      },
    },
  },
  plugins: [],
};
