/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#f1f1fb",
          600: "#706dd5",
        }
      }
    },
  },
  plugins: [],
}