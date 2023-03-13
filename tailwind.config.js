/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      "2":"2px",
      "8":"10px"
    }
   , 
    extend: {},
    screens: {
      'minCel':{'max':'600px'},
      'cel': {'max':'650px'},
      // => @media (min-width: 640px) { ... }
      'tablet': {'max':'930px' },
      'desktop': {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }
      'alter':{'max':"980px"},
      'pc': {'max': '1280px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}