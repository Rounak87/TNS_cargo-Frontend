/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a56db',
          dark: '#0c4a9e',
        },
        secondary: {
          DEFAULT: '#fbbf24',
          dark: '#d97706',
        },
      },
    },
  },
  plugins: [],
}
