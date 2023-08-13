import type { ReactNode } from 'react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import './global.css'
import { exo2, orbitron } from './font'

export const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={`${orbitron.variable} ${exo2.variable}`}>
      <body className='px-4 py-2 flex flex-col min-h-screen bg-orange-50'>
        <header>
          <NavBar />
        </header>
        <main className='py-3 grow'>{children}</main>
        <footer className='text-center text-xs border-t py-3 text-slate-500'>
          Game data and images of courtesy of{' '}
          <Link
            target='_blank'
            href='https://rawg.io/'
            className='font-medium text-blue-600 underline hover:no-underline '
          >
            RAWG
          </Link>
        </footer>
      </body>
    </html>
  )
}
