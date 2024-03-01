/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "tourmaline": ["Pixelify Sans", "sans-serif"],
      "hogs": ["cursive", "sans-serif"],
      "ipsum": ["Flow Circular", "sans-serif"]
    }
  },
  plugins: [],
}

