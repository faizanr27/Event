/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cont: `#2d2a3c`,
        btn: `#613ad8`,
        list: `#4d4b57`,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

