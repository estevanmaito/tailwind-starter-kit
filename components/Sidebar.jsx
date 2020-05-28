import React from 'react'
import componentRoutes from '../routes/component-routes'
import learnRoutes from '../routes/learn-routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Sidebar({ isOpen }) {
  const router = useRouter()

  const navClasses = isOpen
    ? 'w-full fixed inset-0 pt-16 h-full text-gray-700 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10'
    : 'hidden w-full text-gray-700 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10'

  return (
    <nav className={navClasses}>
      <div className="h-full overflow-y-auto scrolling-touch lg:fixed">
        <div className="m-6 overflow-y-auto lg:m-0 lg:mb-4">
          <h5 className="mb-1 text-sm font-bold tracking-normal text-gray-700 uppercase lg:text-xs">
            Learn
          </h5>
          <ul className="text-base font-medium lg:text-sm">
            {learnRoutes.map((r) => (
              <li
                className={
                  router.pathname.includes(r.url) ? 'text-indigo-600 font-semibold mb-1' : 'mb-1'
                }
                key={r.url}>
                <Link href={r.url}>
                  <a className="inline-block py-1 hover:font-semibold">{r.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-6 overflow-y-auto lg:m-0 lg:mb-4">
          <h5 className="mb-1 text-sm font-bold tracking-normal text-gray-700 uppercase lg:text-xs">
            Components
          </h5>
          <ul className="text-base font-medium lg:text-sm">
            {componentRoutes.map((r) => (
              <li
                className={
                  router.pathname.includes(r.url) ? 'text-indigo-600 font-semibold mb-1' : 'mb-1'
                }
                key={r.url}>
                <Link href={r.url}>
                  <a className="inline-block py-1 hover:font-semibold">{r.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
