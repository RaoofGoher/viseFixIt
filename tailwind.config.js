/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 3s ease-in-out infinite",
        slideUp: "slideUp 0.5s ease-out forwards",
        move: "move 2s infinite", // Add the move animation here
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(-35%)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        move: {
          // Define the move keyframes
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      colors: {
        dark: "#1a202c",
        light: "#f7fafc",
        primaryColor: "#93bcbc",
        secondaryColor: "#F58634",
        lightColor1: "#eadeea",
        lightColor2: "#96989A",
        lightColor3: "#E6E6E6",
        heroColor: "#D1D5DB",
      },
      boxShadow: {
        "custom-green": "0 4px 105px #EECEB9", // Adjust color and values
      },
      screens: {
        smartNavbar: {
          // Define a custom max breakpoint
          max: "980px", // Less than 600px
        },
        smartNavbarLinks: {
          // Define a custom max breakpoint
          max: "400px", // Less than 600px
        },
        smartHero: {
          max: "740px",
        },
        changingText: {
          max: "810px",
        },
      },
    },
  },
  plugins: [],
};
