import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between max-w-6xl px-8 py-5 mx-auto mt-14'>
            <div className='logo'>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Logo">
                        <path id="Vector 8" d="M13 9L0 22V0H13V9Z" fill="#FF3C78" />
                        <path id="Vector 9" d="M13.5 48H0V31L30 1H48L13.5 35.5V48Z" fill="#FF3C78" />
                        <path id="Vector 11" d="M29.5 29L20.5 38L29.5 47.5H48L29.5 29Z" fill="#FF3C78" />
                    </g>
                </svg>
            </div>
            <ul className='items-center hidden xl:flex gap-14'>
                <li><Link href="" className='text-lg font-normal text-Dark-blue font-worksans'>Footwear</Link></li>
                <li><Link href="" className='text-lg font-normal text-Dark-blue font-worksans'>About us</Link></li>
                <li><Link href="" className='text-lg font-normal text-Dark-blue font-worksans'>Products</Link></li>
                <li><Link href="" className='text-lg font-normal text-Dark-blue font-worksans'>Sale</Link></li>
            </ul>
            <div className='flex items-center gap-4 btn__group'>
                <Link href="">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="search">
                            <path id="Vector" d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M20.9999 20.9999L16.6499 16.6499" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                </Link>
                <Link href="">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="shopping-bag">
                            <path id="Vector" d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M3 6H21" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_3" d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                </Link>
                <Link href="" className='hidden xl:block'>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="user">
                            <path id="Vector" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#0A083A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                </Link>
                <a className='xl:hidden' >
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={12} viewBox="0 0 32 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H31C31.5523 2 32 1.55228 32 1C32 0.447715 31.5523 0 31 0H1ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H31C31.5523 12 32 11.5523 32 11C32 10.4477 31.5523 10 31 10H1Z" fill="#0A083A" />
                    </svg>

                </a>
            </div>
        </nav>
    )
}
