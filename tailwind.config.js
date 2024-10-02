/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: ['#FFD874'],
      },
      fontFamily: {
        carosL: ['Caros Light', 'sans'],
        carosR: ['Caros Regular', 'sans'],
        carosM: ['Caros Medium', 'sans'],
        carosB: ['Caros Bold', 'sans'],
      }
    },
  },
  plugins: [],
}

