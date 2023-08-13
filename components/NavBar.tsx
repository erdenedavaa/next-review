'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getBaseRoute } from '../app/helper/urlSplit'

const data = [
  {
    id: 1,
    attributes: {
      href: '',
      text: 'Indie Gamer',
    },
    prefetch: true,
  },
  {
    id: 2,
    attributes: {
      href: 'reviews',
      text: 'Reviews',
    },
    prefetch: true,
  },
  {
    id: 3,
    attributes: {
      href: 'about',
      text: 'About',
    },
    prefetch: false,
  },
]

export default function NavBar() {
  const currentRoute = usePathname()

  return (
    <nav>
      <ul className='flex gap-8 py-4 items-center'>
        {data.map((menuItem) => {
          const { id, attributes, prefetch } = menuItem

          return (
            <li key={id} className={`${attributes.href === '' ? 'grow' : ''}`}>
              <Link
                href={`/${attributes.href}`}
                className={` hover:text-orange-600 font-bold ${
                  getBaseRoute(currentRoute) === attributes.href
                    ? 'text-orange-800'
                    : ''
                } ${
                  attributes.href === ''
                    ? 'font-orbitron font-bold text-2xl'
                    : ''
                }`}
                prefetch={prefetch}
              >
                {attributes.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
