import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import SEO from '../components/SEO'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const mainClassName = isOpen ? 'fixed min-h-screen overflow-hidden lg:relative' : ''

  return (
    <>
      <SEO />

      <div className="w-full px-6 mx-auto lg:max-w-screen-xl">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="lg:hidden">
          <Sidebar isOpen={isOpen} />
        </div>
        <div className={mainClassName}>
          <div className="mt-8 md:mt-24">
            <div className="flex flex-col items-center md:flex-row">
              <div className="my-12 text-center md:text-left md:my-0 md:w-1/2">
                <Link href="/learn">
                  <a
                    class="inline-flex items-center px-1 mb-6 bg-gray-100 rounded-full focus:outline-none focus:shadow-outline-gray"
                  >
                    <span
                      class="px-2 ml-px mr-3 text-xs font-medium text-teal-100 uppercase bg-teal-500 rounded-full"
                    >
                      New
                  </span>
                    <span class="mr-3 text-sm leading-loose text-gray-700">Learn Tailwind CSS with an interactive tutorial</span>
                    <svg class="w-5 h-5 text-gray-600 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </Link>
                <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-700 lg:text-5xl">
                  Tailwind Starter Kit
                </h1>
                <p className="max-w-md mx-auto mb-8 text-lg leading-normal text-gray-700 md:mx-0">
                  A library of components made with Tailwind CSS to bootstrap your projects
                </p>
                <div className="flex items-center justify-center md:justify-start">

                  <Link href="/docs/alerts">
                    <a className="inline-flex items-center px-4 py-2 mr-4 font-bold text-white transition-colors duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 focus:shadow-outline">
                      Components
                    </a>
                  </Link>

                  <a
                    className="inline-flex items-center px-4 py-2 font-bold text-gray-700 transition-colors duration-150 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 focus:shadow-outline"
                    href="https://twitter.com/intent/tweet?text=Tailwind Starter Kit - A library of components made with Tailwind CSS to bootstrap your projects&via=estevanmaito&url=https://tailwind-starter-kit.now.sh"
                    target="_blank">
                    <svg className="h-4 mr-2 fill-current" viewBox="0 0 24 24">
                      <path d="M8.2,20.2c6.5,0,11.7-5.2,11.8-11.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2.1-2.2c-0.8,0.3-1.6,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-1.6-1.7-4.2-1.7-5.9-0.1c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.4,7.1,3.3,4.6c-1.1,1.9-0.6,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5l0,0c0,2,1.4,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1c0.5,1.7,2.1,2.8,3.9,2.9c-1.7,1.4-3.9,2-6.1,1.7C3.8,19.5,6,20.2,8.2,20.2" />
                    </svg>
                    Share
                  </a>
                </div>
              </div>

              <div className="md:w-1/2">
                <img
                  className="w-full"
                  src="/undraw_product_teardown.svg"
                  alt="Smartphone with puzzle pieces"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
