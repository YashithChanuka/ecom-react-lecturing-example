/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'special-italic': ['Babylonica', 'cursive'],
        'body': ['Fira Sans', 'sans-serif'],
        'base-italic': ['Pacifico', 'cursive'],
        'heading': ['Play', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
