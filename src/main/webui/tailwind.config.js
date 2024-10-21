/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: (theme) => ({
        DEFAULT: theme("colors.gray.400")
      }),
      colors: {
        'rise-primary-blue': '#3778BA',
        'rise-accent': '#00B2A3'
      }
    },
  },
  plugins: [],
}

