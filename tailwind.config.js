/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryColor':"#F58634",
        'secondaryColor':'#282829',
        'grayColor':'#96989A' 
      }
    },
  },
  plugins: [],
}