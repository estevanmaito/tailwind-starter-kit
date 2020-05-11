import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            docsearch({
              apiKey: 'de0ea1927c3b929b1dd95baee343cfb4',
              indexName: 'estevanmaito_tailwind-starter-kit',
              inputSelector: '#algolia-search',
              debug: false // Set debug to true if you want to inspect the dropdown
            });
          `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
