const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  experimental: {
    basePath: isProd ? '/tailwind-starter-kit' : '',
  },
}
