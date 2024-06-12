/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "lg": "1290px",
      "md": "1120px",
      "sm": "768px",
      "xs": "460px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#f9ef23",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}