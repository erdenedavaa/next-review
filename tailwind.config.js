/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,tsx,mdx}', './components/**/*.{js,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      transitionProperty: {
        scale: 'scale',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
