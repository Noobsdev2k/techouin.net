'use client'
import React, { useState } from 'react'
import { EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function ThumbSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            <Swiper className="extheader-5-slider js-extheader-5-slider"
                loop={true} effect={'fade'}
                fadeEffect={{ crossFade: true }}
                navigation={{ nextEl: '.js-extheader-5-next', prevEl: '.js-extheader-5-prev' }}
                pagination={{
                    el: '.slick-dots', clickable: true,
                    bulletActiveClass: 'swiper-pagination-active',
                    bulletClass: 'swiper-pagination',
                    renderBullet: function (index, className) {
                        return '<li class="' + className + '">' + '<button></button>' + '</li>';
                    },
                    modifierClass: 'dots-'
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[EffectFade, Navigation, Thumbs, Pagination]} >
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
                <SwiperSlide className="extheader-5-slide"><img className="extheader-5-pic" src="/img/image-49.jpg" alt="Image" /></SwiperSlide>
            </Swiper>
            <div className="extheader-5-row">
                <div className="extheader-5-col">
                    <div className="extheader-5-caption">Fendi —</div>
                    <div className="extheader-5-title title title_sm">Black technical knit fabric high-tops</div>
                    <div className="extheader-5-content content">Running sneakers with thin elastic laces.</div>
                    <div className="extheader-5-previews">
                        <Swiper className="extheader-5-thumbs js-extheader-5-thumbs"
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            slidesPerView={3}
                            slideToClickedSlide={true}
                            spaceBetween={10}
                            modules={[Navigation, Thumbs]}>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                            <SwiperSlide className="extheader-5-thumb"><img className="extheader-5-pic" src="/img/image-51.jpg" alt="Image" /></SwiperSlide>
                        </Swiper>
                        <div className="extheader-5-plus js-extheader-5-plus" />
                    </div>
                </div>
                <div className="extheader-5-col">
                    <div className="extheader-5-options">
                        <div className="extheader-5-option extheader-5-option_rows">
                            <div className="extheader-5-label">Size</div>
                            <div className="extheader-5-wrap">
                                {/* sizes*/}
                                <div className="sizes"><label className="sizes-item"><input className="sizes-input" type="radio" name="size" defaultChecked /><span className="sizes-title">37</span></label><label className="sizes-item"><input className="sizes-input" type="radio" name="size" /><span className="sizes-title">38</span></label><label className="sizes-item"><input className="sizes-input" type="radio" name="size" /><span className="sizes-title">39</span></label><label className="sizes-item"><input className="sizes-input" type="radio" name="size" disabled /><span className="sizes-title">40</span></label><label className="sizes-item"><input className="sizes-input" type="radio" name="size" /><span className="sizes-title">41</span></label></div>
                            </div>
                        </div>
                        <div className="extheader-5-option">
                            <div className="extheader-5-label">Reviews</div>
                            <div className="extheader-5-wrap">
                                {/* rating*/}
                                <div className="rating">
                                    <div className="rating-icons"><svg className="icon icon-star-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                        <path d="M9 14.7l-4.5 2.4A1 1 0 0 1 3.1 16l.9-5L.3 7.5a1 1 0 0 1 .6-1.7l5-.7L8.1.6a1 1 0 0 1 1.8 0l2.2 4.5 5 .7a1 1 0 0 1 .6 1.7l-3.6 3.5.9 5a1 1 0 0 1-1.5 1.1L9 14.7z" /></svg>
                                        <svg className="icon icon-star-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M9 14.7l-4.5 2.4A1 1 0 0 1 3.1 16l.9-5L.3 7.5a1 1 0 0 1 .6-1.7l5-.7L8.1.6a1 1 0 0 1 1.8 0l2.2 4.5 5 .7a1 1 0 0 1 .6 1.7l-3.6 3.5.9 5a1 1 0 0 1-1.5 1.1L9 14.7z" /></svg>
                                        <svg className="icon icon-star-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M9 14.7l-4.5 2.4A1 1 0 0 1 3.1 16l.9-5L.3 7.5a1 1 0 0 1 .6-1.7l5-.7L8.1.6a1 1 0 0 1 1.8 0l2.2 4.5 5 .7a1 1 0 0 1 .6 1.7l-3.6 3.5.9 5a1 1 0 0 1-1.5 1.1L9 14.7z" /></svg>
                                        <svg className="icon icon-star-filled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M9 14.7l-4.5 2.4A1 1 0 0 1 3.1 16l.9-5L.3 7.5a1 1 0 0 1 .6-1.7l5-.7L8.1.6a1 1 0 0 1 1.8 0l2.2 4.5 5 .7a1 1 0 0 1 .6 1.7l-3.6 3.5.9 5a1 1 0 0 1-1.5 1.1L9 14.7z" /></svg><svg className="icon icon-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M5.4 14.4l3.2-1.7a1 1 0 0 1 .9 0l3.2 1.7-.6-3.5a1 1 0 0 1 .3-.9l2.5-2.5-3.5-.5a1 1 0 0 1-.8-.5L9 3.3 7.4 6.5a1 1 0 0 1-.8.5l-3.5.5L5.7 10a1 1 0 0 1 .3.9l-.6 3.5zm3.6.4l-4.5 2.4A1 1 0 0 1 3.1 16l.9-5L.3 7.5a1 1 0 0 1 .6-1.7l5-.7L8.1.6a1 1 0 0 1 1.8 0l2.2 4.5 5 .7a1 1 0 0 1 .6 1.7l-3.6 3.5.9 5a1 1 0 0 1-1.5 1.1L9 14.7z" /></svg></div>
                                </div>
                            </div>
                        </div>
                        <div className="extheader-5-option">
                            <div className="extheader-5-label">Price</div>
                            <div className="extheader-5-wrap">$450</div>
                        </div>
                        <div className="extheader-5-option extheader-5-option_rows">
                            <div className="extheader-5-label">Color</div>
                            <div className="extheader-5-wrap">
                                {/* colors*/}
                                <div className="colors"><label className="colors-item"><input className="colors-input" type="radio" name="color" defaultChecked /><span className="colors-bg" style={{ backgroundColor: '#000000' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#BDBBBA' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#FAB35B' }} /></label><label className="colors-item"><input className="colors-input" type="radio" name="color" /><span className="colors-bg" style={{ backgroundColor: '#147ABB' }} /></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
