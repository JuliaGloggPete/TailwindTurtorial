/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [    './public/**/*.{html,js}',
],
 
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body:['Nunito Sans']
      }
    },
  },
  
  plugins: [],
}