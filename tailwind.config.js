/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        background: '#E5E5E5',
        button: '#FF0000',
        footer: '#000',
        mainBackground: '#C4C4C4',
        text: '#000',
        textDescription: '#9C9696',
      },

      fontFamily: {
        roboto: 'Roboto',
      },

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

