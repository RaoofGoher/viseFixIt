/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor':"#987D9A",
        'secondaryColor':'#BB9AB1',
        'lightColor1':'#EECEB9', 
        'lightColor2':'#FEFBD8', 
      }
    },
  },
  plugins: [],
}