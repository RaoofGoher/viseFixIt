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
        'heroColor':'#D1D5DB'
      },
      boxShadow: {
        'custom-green': '0 4px 105px #EECEB9', // Adjust color and values
      },
      screens: {
        'smartNavbar': {         // Define a custom max breakpoint
          'max': '599px',           // Less than 600px
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
