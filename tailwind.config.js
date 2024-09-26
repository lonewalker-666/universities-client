/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      
      'xs': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '576px', 
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      '4xl': '2000px',
      // => @media (min-width: 1600px) { ... }
      'short': { 'raw': '(min-height: 650px) and (min-width: 1024px)' }, // Adjust min-width as needed
      // => @media (min-height: 800px) and (min-width: 1024px) { ... }
    }
  },
  plugins: [],
}
