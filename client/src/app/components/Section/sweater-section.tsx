'use client'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

export default function SweaterSection() {
    return (
        <section className="section">
            <div className="container section-container">
                {/* text 9*/}
                <div className="text-9 js-text-9">
                    <div className="text-9-row">
                        <div className="text-9-col">
                            <div className="text-9-title title title_lg">Sweater Weather</div>
                        </div>
                        <div className="text-9-col">
                            <div className="text-9-subtitle">Material</div>
                            <div className="text-9-content content">Derived under the mindset of eliminating over-accessorized branding.</div>
                        </div>
                        <div className="text-9-col">
                            <div className="text-9-subtitle">Design</div>
                            <div className="text-9-content content">Primarily on letting the quality of the product speak for itself.</div>
                        </div>
                    </div><a className="text-9-more more" href="#">Read More<svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                        <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></a>
                    <div className="text-9-container">
                        <div className="text-9-arrows arrows arrows_white arrows_bg">
                            <button className="flex items-center justify-center arrows-item js-text-9-prev">
                                <svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                    <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center arrows-item js-text-9-next">
                                <svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                    <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg>
                            </button>
                        </div>
                        <Swiper className="text-9-slider js-text-9-slider"
                            slidesPerView={'auto'}
                            loop={true}
                            navigation={{ nextEl: '.js-text-9-next', prevEl: '.js-text-9-prev' }}
                            modules={[Navigation]}>
                            <SwiperSlide className="text-9-slide"><img className="text-9-pic" src="/img/image-45.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="text-9-slide"><img className="text-9-pic" src="/img/image-46.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="text-9-slide"><img className="text-9-pic" src="/img/image-45.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="text-9-slide"><img className="text-9-pic" src="/img/image-46.jpg" alt="Image" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
