/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      "2":"2px",
      "8":"10px"
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
      "cSize":'1.75rem',
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
      'alter':{'max':"850px"},
      'pc': {'max': '1280px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}