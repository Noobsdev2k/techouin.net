import { UseActiveReturnType } from '@/core/hooks/useActive'
import Image from 'next/image'
import React from 'react'


export function NavMenu({ isActive, toggleActive }: UseActiveReturnType) {
    return (
        <div className={`menu-1 js-menu ${isActive ? '' : 'visible'}`}>
            {/* header*/}
            <header className="header">
                <div className="container header-container">
                    <div className="header-left"><a className="header-logo" href="/"><img className="header-pic" src="/img/kalli-black.svg" alt="Kalli" /></a></div>
                    <div className="header-right"><button className="header-action" onClick={toggleActive}><svg className="icon icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path d="M13.4.6a1 1 0 0 1 0 1.4l-5 5 5 5c.4.4.4.9.1 1.3v.1a1 1 0 0 1-1.4 0l-5-5-5 5c-.4.4-.9.4-1.3.1H.6a1 1 0 0 1 0-1.4l5-5-5-5C.3 1.7.2 1.1.6.7V.6A1 1 0 0 1 2 .6l5 5 5-5c.4-.4.9-.4 1.3-.1h.1z" /></svg></button></div>
                </div>
            </header>
            <div className="container menu-1-container">
                <div className="menu-1-col">
                    <div className="menu-1-nav"><a className="menu-1-link" href="#">About</a><a className="menu-1-link active" href="#">Portfolio</a><a className="menu-1-link" href="#">Blog</a><a className="menu-1-link" href="#">Contact</a></div>
                </div>
                <div className="menu-1-col">
                    <div className="menu-1-search"><input className="menu-1-input" type="search" placeholder="Search" /></div>
                    <div className="menu-1-socials"><a className="menu-1-social" href="#">Facebook</a><a className="menu-1-social" href="#">Twitter</a><a className="menu-1-social" href="#">Instagram</a></div>
                </div>
            </div>
        </div>

    )
}
