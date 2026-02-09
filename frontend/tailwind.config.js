/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Appointment card colors (pastel)
        appointment: {
          pink: '#FFB3BA',
          peach: '#FFDFBA',
          yellow: '#FFFFBA',
          green: '#BAFFC9',
          blue: '#BAE1FF',
          purple: '#D4BAFF',
          lavender: '#E0BBE4',
        },
        // UI colors
        header: {
          bg: '#2C3E50',
          text: '#FFFFFF',
        },
        sidebar: {
          bg: '#F8F9FA',
          border: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
