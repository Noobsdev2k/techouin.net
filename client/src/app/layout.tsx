import './globals.scss'
import type { Metadata } from 'next'




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
      <body className='font-worksans'>
        <div className='page'>
          {children}
        </div>
      </body>
    </html>
  )
}
