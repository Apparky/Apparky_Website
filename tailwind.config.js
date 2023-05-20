/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,tsx,jsx}","./components/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        'PlataSansRegular': 'plata-sans', 'AlfphabetCONDENSED':'alfphabet'
      },

    },
  },
  plugins: [],
}
