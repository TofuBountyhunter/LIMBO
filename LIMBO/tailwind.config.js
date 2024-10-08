/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        'allShadow': '0px 0px 15px 3px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
  darkMode :"class",
}

