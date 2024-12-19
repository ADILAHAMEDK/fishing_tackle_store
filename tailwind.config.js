/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBgWhite:'rgb(221, 221, 221)',
        navColor:'rgb(153, 153, 153)'

      }
    },
  },
  plugins: [],
}
