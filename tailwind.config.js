/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hogs-background': "url('assets/hogs-background.png')"
      }
    },
    fontFamily: {
      "tourmaline": ["Pixelify Sans", "sans-serif"],
      "hogs": ["Barlow Semi Condensed", "sans-serif"],
      "ipsum": ["Flow Circular", "sans-serif"],
      "sansui": ["Josefin Sans", "sans-serif"],
    }
  },
  plugins: [],
}

