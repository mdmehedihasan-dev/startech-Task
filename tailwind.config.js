/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav:"#081621",
        icon:"#ef4a23",
        color2:"#808785",
        border:"#e7e7e7"
      },
      spacing: {
        '725': '600px',
      }
    },
  },
  plugins: [],
}