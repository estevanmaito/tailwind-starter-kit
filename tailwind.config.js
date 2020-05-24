const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: false,
    content: ['./pages/**/*.jsx', './pages/**/*.mdx', './containers/**/*.jsx', './components/**/*.jsx']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  variants: {},
  plugins: [require('tailwindcss-markdown')],
}
