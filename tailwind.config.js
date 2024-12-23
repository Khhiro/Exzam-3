/** @type {import('tailwindcss').Config} */
export default {
  screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'sf': '1410px',
      // => @media (min-width: 1410px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    } ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}