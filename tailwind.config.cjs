/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Nunito',
        pacifico: 'Pacifico',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}