const { h2, h3 } = require('motion/react-client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmMono: ["IBM Plex Mono","sans-serif"],
        jetBrainsMono: ["JetBrains Mono", "sans-serif"]
      },
      screens: {
        phone: '374px',
        p1: '420px',
        phone2: '440px',
        phone3: '615px',
        h1: '860px',
        h2: '1100px',
        laptop: '1180px',
        lappy: '1182px',
        h5: '1300px',
        h3: '1441px',
        h4: '1561px',
        big: '2000px'
      }
    },
  },
  plugins: [],
}