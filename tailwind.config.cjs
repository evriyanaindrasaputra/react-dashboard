/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        'home-dashboard' : 'minmax(0, 300px) minmax(0, 450px) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
