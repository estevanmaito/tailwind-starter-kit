import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'
import '../css/prism-dracula.css'
import { MDXProvider } from '@mdx-js/react'

import CodeBlock from '../components/CodeBlock'

const mdComponents = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

export default ({ Component, pageProps }) => (
  <MDXProvider components={mdComponents}>
    <Component {...pageProps} />
  </MDXProvider>
)
