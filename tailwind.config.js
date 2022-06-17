/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'premobile': '420px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1070px',
      // note Adjusted => @media (min-width: 1024px) { ... }

      'xl': '1320px',
      // note Adjusted => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
