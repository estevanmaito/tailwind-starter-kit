import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Tailwind CSS Starter Kit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="mt-8 md:mt-16">
          <div className="flex flex-col items-center md:flex-row">
            <div className="my-12 md:my-0 md:w-1/2">
              <h1 className="text-4xl font-bold tracking-tight text-center text-gray-700 md:text-left lg:text-5xl xl:text-6xl">
                Tailwind Start Kit
              </h1>
              <p className="max-w-md mx-auto mb-8 text-lg leading-normal text-center text-gray-700 md:mx-0 md:text-left">
                A library of components made with Tailwind CSS to bootstrap your projects
              </p>
              <div className="flex items-center justify-center md:justify-start">
                <Link href="/docs/alerts">
                  <a className="inline-flex items-center px-4 py-2 mr-4 font-bold text-white transition-colors duration-150 ease-in-out bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 focus:shadow-outline">
                    Read docs
                  </a>
                </Link>

                <Link href="/docs/alerts">
                  <a className="inline-flex items-center px-4 py-2 font-bold text-gray-700 transition-colors duration-150 ease-in-out bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 focus:shadow-outline">
                    <svg className="h-4 mr-2 fill-current" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                    </svg>
                    Share
                  </a>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                className="w-full"
                src="/tailwind-starter-kit/undraw_product_teardown.svg"
                alt="Smartphone with puzzle pieces"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
