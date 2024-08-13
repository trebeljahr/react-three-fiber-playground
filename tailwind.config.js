const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      'leva-white': '#fefefe',
      'leva-dark': '#181c20',
      'leva-medium': '#535760',
      'leva-light-grey': '#8c92a4',
    },
    fontFamily: {
      leva: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Roboto Mono', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
