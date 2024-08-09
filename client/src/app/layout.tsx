import './globals.scss'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'


const work_sans = Work_Sans({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Techouin.net',
  description: 'Ecommerce shopping cart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <div className='page'>
          {children}
        </div>
      </body>
    </html>
  )
}
