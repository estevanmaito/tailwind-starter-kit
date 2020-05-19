import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react'
import theme from 'prism-react-renderer/themes/vsDark'

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '')
  if (live) {
    return (
      <div className="overflow-hidden rounded-lg">
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => '/** @jsx mdx */' + `<>${code}</>`}
          scope={{ mdx }}
          theme={theme}>
          <LivePreview className="p-4 border-t border-l border-r rounded-t-lg" />
          <LiveEditor
            className="overflow-x-auto break-normal"
            style={{
              fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
          />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
