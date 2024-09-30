/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': "#987D9A",
        'secondaryColor': '#BB9AB1',
        'lightColor1': '#EECEB9', 
        'lightColor2': '#FEFBD8', 
      },
      boxShadow: {
        'custom-green': '0 4px 105px #EECEB9', // Adjust color and values
      },
      screens: {
        'smartNavbar': {         // Define a custom max breakpoint
          'max': '599px',           // Less than 600px
        },
        'smartHero': {
          'max': '645px',
        },
        'changingText': {
          'max': '810px',
        }
      },
    },
  },
  plugins: [],
}
