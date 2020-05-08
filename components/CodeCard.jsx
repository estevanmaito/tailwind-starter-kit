import React from 'react'
import PrismCode from '../components/PrismCode'

function CodeCard({ lang, code }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="p-4 border-t border-l border-r rounded-t-lg"></div>
      <PrismCode lang={lang} code={code} />
    </div>
  )
}

export default CodeCard
