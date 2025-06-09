/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#008080',
        grayLight: '#f5f5f5',
      }
    },
  },
  plugins: [],
}

