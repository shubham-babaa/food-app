/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
       
        'footer-texture': "url('./footer2.jpg')",
      },
      backgroundSize:{
        "hei":"content",
        "wid":"cover",
      },
    

    },
  },
  plugins: [],
}
