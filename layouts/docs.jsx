import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default (frontMatter) => {
  return ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const mainClassName = isOpen
      ? 'fixed max-w-full min-h-screen overflow-hidden lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16'
      : 'max-w-full lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16'
    return (
      <div className="w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex mt-24">
          <Sidebar isOpen={isOpen} />
          <div className={mainClassName}>{children}</div>
        </div>
      </div>
    )
  }
}
