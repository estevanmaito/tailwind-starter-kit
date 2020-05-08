import React from 'react'
import Link from 'next/link'

function Navbar({ isOpen, setIsOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center max-w-screen-xl px-6 py-2 mx-auto text-gray-700 bg-white">
      {/* Logo */}
      <Link href="/">
        <a className="flex items-center pr-6 lg:w-1/4 xl:w-1/5">
          <span className="hidden font-bold sm:block">Tailwind Starter Kit</span>
        </a>
      </Link>

      {/* Input with left icon */}
      <div className="w-full lg:w-2/4 xl:w-3/5">
        {/* Remove pointer events so if you click on the icon, it actually clicks on the input */}
        {/* inset-y-0 will make it stick to top and bottom, like top: 0 and bottom: 0 */}
        <div className="w-full xl:pl-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-600 pointer-events-none">
              {/* fill-current will make the SVG the same color as the current from parent */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                  fillRule="evenodd"></path>
              </svg>
            </div>
            {/* Bigger pl to accommodate the icon */}
            <input
              className="w-full py-2 pl-10 pr-4 placeholder-gray-600 transition-shadow duration-100 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed focus:bg-white focus:shadow-lg"
              placeholder="Waiting for Algolia to crawl"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Mobile menu open/close */}
      {/* Negative mr to compensate the padding in the button */}
      <div className="flex items-center -mr-2 lg:hidden">
        <button className="p-2 ml-4 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              {/* Close icon */}
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              {/* Menu icon */}
              <path
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
                fillRule="evenodd"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Desktop links */}
      <div className="justify-end hidden pl-4 lg:flex lg:w-1/4 xl:w-1/5">
        <ul className="flex">
          <li>
            <a href="https://github.com/estevanmaito/windmill" target="_blank">
              <svg viewBox="0 0 16 16" className="w-6 h-6 fill-current hover:text-gray-600">
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
