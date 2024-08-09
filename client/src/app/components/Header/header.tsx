'use client'
import Link from 'next/link'

import { NavMenu } from './menu'
import { useActive } from '@/core/hooks/useActive'
import Image from 'next/image'



export default function Header({ hidden }: { hidden: boolean }) {
  const { isActive, toggleActive } = useActive()

  return (
    <><header className={`header ${hidden ? '' : 'header_absolute'}`}>
      <div className="container header-container">
        <div className="header-left">
          <button className="header-action" onClick={toggleActive}>
            <svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg>

          </button>
          <Link href="/" className="header-logo">
            <Image src={'/logo.svg'} width={120} height={40} alt='hugoshoping_logo' />
          </Link>
        </div>
        <div className="header-right">
          <a href="#" className="header-action">
            <svg className="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M8 0a8 8 0 0 1 8 8c0 1.848-.627 3.55-1.68 4.905l3.386 3.388a1 1 0 1 1-1.414 1.414h0l-3.388-3.386C11.55 15.373 9.848 16 8 16A8 8 0 1 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 1 0 8 2z" /></svg>
          </a>
          <a href="#" className="header-action">
            <svg className="icon icon-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path d="M2.1 16h11.8l-.8-10H2.9l-.8 10zM8 0a4 4 0 0 1 4 4h2a1 1 0 0 1 1 .9l1 12a1 1 0 0 1-1 1.1H1a1 1 0 0 1-1-1.1l1-12A1 1 0 0 1 2 4h2a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" /></svg>
          </a>
          <a className="header-user"><img src="/img/user-1.jpg" alt="User" className="header-pic" /></a>
        </div>
      </div>
    </header>
      <NavMenu isActive={isActive} toggleActive={toggleActive} />
    </>

  )
}
