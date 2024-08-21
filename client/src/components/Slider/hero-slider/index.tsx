'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation, EffectFade } from 'swiper/modules'
import Image from 'next/image'


export function HeroSlider() {
  return (
    <div className='hero-7 js-hero-7'>
      <Swiper
        className='hero-7-slider js-hero-7-slider'
        loop={true}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        navigation={{ nextEl: '.js-hero-7-next', prevEl: '.js-hero-7-prev' }}
        modules={[EffectFade, Navigation]}
      >
        <SwiperSlide className='hero-7-slide'>
          <div className='container hero-7-container'>
            <div className='hero-7-group'>
              <div className='hero-7-label label'>Out Now —</div>
              <div className='hero-7-title title'>Yeezy Boost 350 V2 Clay</div>
              <a className='hero-7-more' href='#'>
                Buy Now
              </a>
            </div>
            <div className='hero-7-bg' style={{ backgroundImage: 'url(/img/bg-image-10.jpg)' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide className=' hero-7-slide'>
          <div className='container hero-7-container'>
            <div className='hero-7-group'>
              <div className='hero-7-label label'>Discover —</div>
              <div className='hero-7-title title'>Beoplay H9i</div>
              <a className='hero-7-more' href='#'>
                Buy Now
              </a>
            </div>
            <div className='hero-7-bg' style={{ backgroundImage: 'url(/img/bg-image-10.jpg)' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='hero-7-slide'>
          <div className='container hero-7-container '>
            <div className='hero-7-group'>
              <div className='hero-7-label label'>Sale —</div>
              <div className='hero-7-title title'>Design adds value faster</div>
              <a className='hero-7-more' href='#'>
                Buy Now
              </a>
            </div>
            <div className='hero-7-bg' style={{ backgroundImage: 'url(/img/bg-image-10.jpg)' }} />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='z-10 hero-7-foot'>
        <div className='container hero-7-container'>
          <div className='hero-7-arrows arrows arrows_white arrows_bg'>
            <button className='flex items-center justify-center arrows-item js-hero-7-prev'>
              <svg className='icon icon-arrow-left' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 9'>
                <path d='M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z' />
              </svg>
            </button>
            <button className='flex items-center justify-center arrows-item js-hero-7-next'>
              <svg className='icon icon-arrow-right' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 9'>
                <path d='M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z' />
              </svg>
            </button>
          </div>
          <div className='hero-7-pager'>
            <span className='hero-7-current js-hero-7-current'>01</span> —
            <span className='hero-7-total js-hero-7-total' />
          </div>
          <div className='hero-7-box'>
            <div className='hero-7-next'>
              <div className='hero-7-inner'>
                <a className='hero-7-preview' href='#'>
                  <img className='hero-7-pic' src='/img/image-39.jpg' alt='Image' />
                </a>
                <div className='hero-7-details'>
                  <div className='hero-7-label label'>Editor&apos;s pick</div>
                  <a className='hero-7-subtitle' href='#'>
                    Nike Air Force 1 &apos;07 All Black
                  </a>
                </div>
              </div>
              <a className='hero-7-buy' href='#'>
                <svg className='icon icon-bag' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 18'>
                  <path d='M2.1 16h11.8l-.8-10H2.9l-.8 10zM8 0a4 4 0 0 1 4 4h2a1 1 0 0 1 1 .9l1 12a1 1 0 0 1-1 1.1H1a1 1 0 0 1-1-1.1l1-12A1 1 0 0 1 2 4h2a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
