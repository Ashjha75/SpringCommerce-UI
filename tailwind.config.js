/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#171717', // Black
        secondary: '#ededed', // whitish
        accent: '#F59E0B', // Amber
        neutral: '#9b9b9b', // Slate
        base: '#F3F4F6', // Gray
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
