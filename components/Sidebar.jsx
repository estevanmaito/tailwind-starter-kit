import React from 'react'
import routes from '../routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Sidebar({ isOpen }) {
  const router = useRouter()

  const navClasses = isOpen
    ? 'w-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10'
    : 'hidden w-full text-gray-600 lg:block lg:w-1/4 xl:w-1/5 bg-white z-10'

  return (
    <nav className={navClasses}>
      <h5 className="text-xs font-bold tracking-normal text-gray-500 uppercase">Components</h5>
      <ul>
        {routes.map((r) => (
          <li
            className={router.pathname.includes(r.url) ? 'text-gray-800 font-semibold' : ''}
            key={r.url}>
            <Link href={r.url}>
              <a className="hover:text-gray-800">{r.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
