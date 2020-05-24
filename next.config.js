const isProd = process.env.NODE_ENV === 'production'
const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  // defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => { },
    phase: 'prebuild|loader|both',
  },
})({
  // pageExtensions: ['js', 'jsx', 'mdx'],
  // experimental: {
  //   basePath: isProd ? '/tailwind-starter-kit' : '',
  // },
})
