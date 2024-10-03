/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        primary: ['#FFD874'],
        background: ['#F8F7F1'],
        buttonHov: ['#FFCA42'],
        buttonAct: ['#E5A80A'],
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

