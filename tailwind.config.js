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
        'secondaryColor':'#282829',
        'grayColor':'#EECEB9' 
      }
    },
  },
  plugins: [],
}