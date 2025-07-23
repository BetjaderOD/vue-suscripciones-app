/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0e1556',
        secondary: '#03be91',
        'secondary-2': '#1d4de6',
        background: '#ffffff',
        text: '#0e1556',
      },
    },
  },

  plugins: [],
}