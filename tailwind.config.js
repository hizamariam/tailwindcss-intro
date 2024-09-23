/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './*.html',       
    './src/**/*.html' 
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

