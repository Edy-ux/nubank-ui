/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Graphik-Medium, Inter var, sans-serif"]
      },
      backgroundImage: {
        "section": "url('https://nubank.com.br/images-cms/1650479239-woman-holding-card-smiling-2-lg-3x.jpg?w=1152&dpr=1&auto=compress&fm=webp')",
        
      }
     
    },
  },
  plugins: [],
}