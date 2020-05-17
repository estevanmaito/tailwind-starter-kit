const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.jsx', './pages/**/*.mdx', './containers/**/*.jsx', './components/**/*.jsx'],
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
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.markdown': {
          '@apply text-gray-700 leading-normal': {},
          '> *:first-child': {
            '@apply mt-0': {},
          },
          '> * + *': {
            '@apply mt-6': {},
          },
          '> ul > * + *, > ol > * + *': {
            '@apply mt-4': {},
          },
          '> hr': {
            '@apply border-t-0 border-r-0 border-l-0 border-b-2 border-gray-200 my-8': {},
          },
          '> a, > p a, > ul li a, > ol li a, a&': {
            '@apply text-blue-500 underline font-medium': {},
            '&:hover': {
              '@apply text-blue-700': {},
            },
            strong: {
              '@apply text-blue-500': {},
            },
            code: {
              '@apply underline text-blue-500': {},
            },
          },
          '> p strong, > ul strong': {
            '@apply font-semibold text-gray-800': {},
          },
          '> p code, > ul li *:not(pre) code, > ul li > code, > ol li *:not(pre) code, > ol li > code, p& code&': {
            '@apply inline-block bg-gray-100 rounded-sm text-sm px-1 leading-none whitespace-no-wrap text-purple-600 font-mono align-baseline font-normal': {},
          },
          '> p strong code, > ul li strong code, > ol li strong code': {
            '@apply font-normal': {},
          },
          '> pre, pre&': {
            '@apply font-mono rounded-lg font-normal': {},
          },
          '> blockquote, blockquote&': {
            '@apply italic text-gray-900 text-sm': {},
          },
          '> h1, h1&': {
            '@apply mb-1 leading-none text-gray-900 font-medium text-3xl': {},
          },
          '> h2, h2&': {
            '@apply mt-16 mb-4 text-gray-900 leading-none font-normal text-2xl': {},
          },
          '> h2 + h3': {
            '@apply mt-6': {},
          },
          '> h3, h3&': {
            '@apply mt-12 -mb-3 text-gray-900 leading-tight font-medium text-xl': {},
          },
          '> h4, h4&': {
            '@apply mt-12 mb-0 text-gray-900 leading-snug font-medium text-lg': {},
          },
          '> h1 + p': {
            '@apply mt-0 mb-4 text-gray-600': {},
          },
          '> h1 > code, > h2 > code, > h3 > code, > h4 > code': {
            '@apply text-purple-600 font-mono': {},
          },
          '> h3 > code': {
            '@apply text-lg px-1 bg-gray-100': {},
          },
          '> h4 > code': {
            '@apply text-base px-1 bg-gray-100': {},
          },
          '> p, p&, > blockquote > p': {
            '@apply text-base mt-6': {},
          },
          '> ul:not(.list-none)': {
            '@apply pl-0 list-none': {},
            li: {
              '@apply relative pl-5': {},
              '&::before': {
                '@apply absolute left-0 text-gray-400 inline-block mr-3': {},
                content: '&#x2022;',
              },
            },
          },
          '> ol': {
            '@apply list-none': {},
            counterReset: 'item',
            '> li': {
              '@apply relative pl-10': {},
            },
            '> li::before': {
              '@apply absolute top-0 left-0 mt-px flex items-center justify-center h-6 w-6 bg-gray-300 rounded-full text-gray-700 text-xs font-bold': {},
              content: 'counter(item)',
              counterIncrement: 'item',
            },
          },
          '> :not(pre):not(h1):not(h2):not(h3):not(h4) > code, > ul code, > ol code': {
            '@apply bg-gray-100 text-sm leading-normal': {},
          },
          '> pre, pre&, > ul li pre, > ol li pre': {
            '@apply flex p-0 bg-gray-800 text-sm leading-normal': {},
          },
          '> pre code, pre code&, > ul li pre code, > ol li pre code': {
            '@apply p-4': {},
          },
          '> table': {
            '@apply w-full text-left border-collapse': {},
            th: {
              '@apply text-sm font-semibold text-gray-700 p-2 bg-gray-100': {},
            },
            td: {
              '@apply p-2 border-t border-gray-200 text-sm': {},
              code: {
                '@apply bg-gray-100 px-1 font-mono text-xs text-purple-700 align-baseline': {},
              },
              '&:first-child': {
                '@apply border-gray-300': {},
              },
            },
          },
        },
      })
    }
    )
  ],
}
