'use client'
import { ProductCard } from '@/app/components/Slider'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function StyleWith() {
    return (
        <section className="section section_pt0 section_hidden">
            <div className="container section-container">
                {/* cards 15*/}
                <div className="cards-15 js-cards-15">
                    <div className="cards-15-head">
                        <div className="cards-15-title title title_sm">Style with —</div>
                        <div className="cards-15-arrows arrows arrows_sm"><button className="arrows-item js-cards-15-prev"><svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                            <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" /></svg></button><button className="arrows-item js-cards-15-next"><svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></button></div>
                    </div>
                    <Swiper className="cards-15-slider js-cards-15-slider" slidesPerView='auto' breakpoints={{
                        768: { slidesPerView: 3, slidesPerGroup: 1 },
                        1024: { slidesPerView: 4 },
                    }}>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide className="cards-15-slide">
                            <ProductCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
