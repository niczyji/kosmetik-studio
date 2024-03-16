/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f3eeea',
        'secondary-background': '#ebe3d5',
        'accent': '#b0a695',
        'text': '#776b5d',
      },
    },
  },
  plugins: [],
}

