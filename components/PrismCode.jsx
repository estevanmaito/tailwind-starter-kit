import React, { useRef, useEffect } from 'react'
import Prism from 'prismjs'

function PrismCode({ code, lang }) {
  const ref = useRef(null)

  useEffect(() => {
    Prism.highlightElement(ref.current)
  }, [])

  return (
    <pre>
      <code ref={ref} className={`language-${lang}`}>
        {code.trim()}
      </code>
    </pre>
  )
}

export default PrismCode
