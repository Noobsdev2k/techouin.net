'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavMenu } from './menu'

export interface UseActiveReturnType {
  isActive: boolean;
  toggleActive: () => void;
}

export const useActive = (): UseActiveReturnType => {
  const [isActive, setIsActive] = useState<boolean>(true);  // Specify the type for useState

  const toggleActive = (): void => {
    setIsActive(currentActive => !currentActive);  // No change needed here, but reaffirming return type
  };
  return { isActive, toggleActive };


};

export default function Header({ abs }: any) {
  const { isActive, toggleActive } = useActive()

  return (
    <><header className={`header ${abs ? '' : 'header_absolute'}`}>
      <div className="container header-container">
        <div className="header-left">
          <button className="header-action" onClick={toggleActive}>
            <svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg>

          </button>
          <Link href="/" className="header-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width={56} height={24} viewBox="0 0 56 24">
              <path d="M10.0487106,15.09375 L16.0659026,23.625 L9.95845272,23.625 L5.05444126,16.15625 L4.96418338,16.15625 L4.96418338,23.625 L0,23.625 L0,0 L4.96418338,0 L4.96418338,14.375 L5.05444126,14.375 L9.83810888,8.0625 L15.8252149,8.0625 L10.0487106,15.09375 Z M26.034384,17.375 L26.034384,16.84375 L25.4025788,16.84375 C23.2363897,16.84375 20.7994269,17.125 20.7994269,18.96875 C20.7994269,20.15625 21.9426934,20.5625 22.9355301,20.5625 C24.9212034,20.5625 26.034384,19.3125 26.034384,17.375 Z M19.4756447,12.96875 L16.97851,10.1875 C18.7234957,8.46875 21.2206304,7.5625 23.6575931,7.5625 C28.6819484,7.5625 30.5472779,10.125 30.5472779,15.78125 L30.5472779,23.625 L26.034384,23.625 L26.034384,21.96875 L25.9441261,21.96875 C25.1919771,23.25 23.4770774,24 21.7020057,24 C19.3252149,24 16.256447,22.78125 16.256447,19.125 C16.256447,14.625 21.52149,13.875 25.8839542,13.875 L25.8839542,13.625 C25.8839542,12.09375 24.7106017,11.375 23.1762178,11.375 C21.7621777,11.375 20.3782235,12.09375 19.4756447,12.96875 Z M38.7707736,23.625 L33.7765043,23.625 L33.7765043,0 L38.7707736,0 L38.7707736,23.625 Z M47.234957,23.625 L42.2406877,23.625 L42.2406877,0 L47.234957,0 L47.234957,23.625 Z M56,3.09375 C56,4.6875 54.7363897,5.90625 53.1719198,5.90625 C51.5773639,5.90625 50.3438395,4.625 50.3438395,3.09375 C50.3438395,1.59375 51.5773639,0.28125 53.1719198,0.28125 C54.7363897,0.28125 56,1.53125 56,3.09375 Z M55.6389685,23.625 L50.7048711,23.625 L50.7048711,8.0625 L55.6389685,8.0625 L55.6389685,23.625 Z" />
            </svg>

          </Link>
        </div>
        <div className="header-right">
          <a href="#" className="header-action">
            <svg className="icon icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M8 0a8 8 0 0 1 8 8c0 1.848-.627 3.55-1.68 4.905l3.386 3.388a1 1 0 1 1-1.414 1.414h0l-3.388-3.386C11.55 15.373 9.848 16 8 16A8 8 0 1 1 8 0zm0 2a6 6 0 1 0 0 12A6 6 0 1 0 8 2z" /></svg>
          </a>
          <a href="#" className="header-action">
            <svg className="icon icon-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18"><path d="M2.1 16h11.8l-.8-10H2.9l-.8 10zM8 0a4 4 0 0 1 4 4h2a1 1 0 0 1 1 .9l1 12a1 1 0 0 1-1 1.1H1a1 1 0 0 1-1-1.1l1-12A1 1 0 0 1 2 4h2a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" /></svg>
          </a>
          <a href="#" className="header-user"><img src="/img/user-1.jpg" alt="User" className="header-pic" /></a>
        </div>
      </div>
    </header>
      <NavMenu isActive={isActive} toggleActive={toggleActive} />
    </>

  )
}
