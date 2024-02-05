/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red': '#b42319',
        'gray': '#ebebeb',
      },
      fontSize: {
        'small': '0.5rem'
      },
      boxShadow: {
        'solid': '0px 11px 2px 5px rgba(235,235,235,1)',
      }
    },
  },
  plugins: [],
}