/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      flex: {
        '1.5': '1.5 1.5 0%',
      },

      screens: {
        'sm': '534px',
      },
    },
  },
  plugins: [],
}

