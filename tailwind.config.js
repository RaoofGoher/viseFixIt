/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'primaryColor': "#F58634",
        'secondaryColor': '#282829',
        'lightColor1': '#fee3d0', 
        'lightColor2': '#96989A', 
        'heroColor':'#D1D5DB'
      },
      boxShadow: {
        'custom-green': '0 4px 105px #EECEB9', // Adjust color and values
      },
      screens: {
        'smartNavbar': {         // Define a custom max breakpoint
          'max': '980px',           // Less than 600px
        },
        'smartNavbarLinks': {         // Define a custom max breakpoint
          'max': '400px',           // Less than 600px
        },
        'smartHero': {
          'max': '645px',
        },
        'changingText': {
          'max': '810px',
        }
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(-35%)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

//  'black': "#282829",
// 'lightskin': '#fee3d0',
// 'orange': '#F58634', 
// 'lightgray': '#96989A',
//  white:"#ffffff" 
// 'heroColor':'#D1D5DB'