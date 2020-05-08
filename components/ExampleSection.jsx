import React from 'react'

function ExampleSection({ children, id }) {
  return (
    <div id={id} className="mb-12">
      {children}
    </div>
  )
}

export default ExampleSection
