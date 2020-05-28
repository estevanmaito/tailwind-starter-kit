import React, { useState } from 'react'

function Spoiler({ children }) {
  const [show, setShow] = useState(false)

  return <div onClick={() => setShow(true)}>
    {
      show
        ? children
        : <span className="underline cursor-pointer">click to reveal spoiler</span>
    }
  </div>
}

export default Spoiler