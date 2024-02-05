/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red': '#b42319',
      },
      fontSize: {
        'small': '0.5rem'
      }
    },
  },
  plugins: [],
}