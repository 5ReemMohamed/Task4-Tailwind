/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {

    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors:{
      White: "hsl(0, 0%, 98%)",
      Gray: "hsl(0, 0%, 41%)",
      black: "hsl(0, 0%, 8%)",
   },
   fontFamily:{
     body :['Epilogue']
   },
    extend: {},
  },
  plugins: [],
}

