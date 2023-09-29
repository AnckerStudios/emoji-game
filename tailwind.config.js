/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peach' : '#FFD9C0',
        'background': '#FAF0D7',
        'blue': '#8CC0DE',
        'green': '#CCEEBC',
        'darkblue': '#8CA8DE'
      },
      boxShadow: {
        'big': '-1.25rem 1.25rem'
      },
      width: {
        'big': '15.625rem',
        'small': '5rem',
      },
      height:{
        'big': '15.625rem',
        'small': '5rem',
      },
      borderRadius:{
        'big': '2.5rem',
        'small': '1.1rem'
      }
    },
  },
  plugins: [],
}
