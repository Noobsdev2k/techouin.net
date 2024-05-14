'use client'
import React from 'react'
import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from 'swiper/modules'
import Link from 'next/link'



export function ProductCard({ srcImg, alt, price }: any) {
  return (
    <Swiper
      className='carousel'
      loop={true}
      pagination={{
        bulletElement: 'li',
        clickable: true,
        bulletActiveClass: 'swiper-pagination-active',
        modifierClass: 'dots-'
      }}
      modules={[Pagination]}
    >
      <div className='carousel-list js-carousel'>
        <SwiperSlide>
          <Link className='carousel-slide' href='#'>
            <img className='carousel-pic' src='/img/image-41.jpg' alt='Image' />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className='carousel-slide' href='#'>
            <img className='carousel-pic' src='/img/image-41.jpg' alt='Image' />
          </Link>
        </SwiperSlide>{' '}
        <SwiperSlide>
          <Link className='carousel-slide' href='#'>
            <img className='carousel-pic' src='/img/image-41.jpg' alt='Image' />
          </Link>
        </SwiperSlide>
      </div>
      <div className='z-10 carousel-price'>$420</div>
    </Swiper>
  )
}
