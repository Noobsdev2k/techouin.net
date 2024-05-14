'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

export default function Gallery() {
    return (
        <Swiper className="gallery-2-slider js-gallery-2-slider"
            slidesPerView={'auto'}
            scrollbar={{ el: '.gallery-2-progress', dragClass: 'js-gallery-2-position', }}
            modules={[Scrollbar]}>
            <SwiperSlide className="gallery-2-slide"><a className="gallery-2-link" href="#"><img className="gallery-2-pic" src="/img/image-29.jpg" alt="Image" /></a><a className="gallery-2-btn btn btn_icon btn_white" href="#"><svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                <path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg><span className="btn-span">See More</span></a></SwiperSlide>
            <SwiperSlide className="gallery-2-slide"><a className="gallery-2-link" href="#"><img className="gallery-2-pic" src="/img/image-26.jpg" alt="Image" /></a><a className="gallery-2-btn btn btn_icon btn_white" href="#"><svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                <path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg><span className="btn-span">See More</span></a></SwiperSlide>
            <SwiperSlide className="gallery-2-slide"><a className="gallery-2-link" href="#"><img className="gallery-2-pic" src="/img/image-30.jpg" alt="Image" /></a><a className="gallery-2-btn btn btn_icon btn_white" href="#"><svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                <path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg><span className="btn-span">See More</span></a></SwiperSlide>
            <SwiperSlide className="gallery-2-slide"><a className="gallery-2-link" href="#"><img className="gallery-2-pic" src="/img/image-31.jpg" alt="Image" /></a><a className="gallery-2-btn btn btn_icon btn_white" href="#"><svg className="icon icon-grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                <path d="M1.5 14c.8 0 1.5.7 1.5 1.5S2.3 17 1.5 17 0 16.3 0 15.5.7 14 1.5 14zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 17 8.5 17 7 16.3 7 15.5 7.7 14 8.5 14zm-7-7C2.3 7 3 7.7 3 8.5S2.3 10 1.5 10 0 9.3 0 8.5.7 7 1.5 7zm14 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S14 9.3 14 8.5 14.7 7 15.5 7zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 10 8.5 10 7 9.3 7 8.5 7.7 7 8.5 7zm-7-7C2.3 0 3 .7 3 1.5S2.3 3 1.5 3 0 2.3 0 1.5.7 0 1.5 0zm14 0c.8 0 1.5.7 1.5 1.5S16.3 3 15.5 3 14 2.3 14 1.5 14.7 0 15.5 0zm-7 0c.8 0 1.5.7 1.5 1.5S9.3 3 8.5 3 7 2.3 7 1.5 7.7 0 8.5 0z" /></svg><span className="btn-span">See More</span></a></SwiperSlide>
        </Swiper>
    )
}
