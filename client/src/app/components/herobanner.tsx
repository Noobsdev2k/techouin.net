'use client'
import React from 'react'
import Image from 'next/image'
import hero_banner from '@/assets/image/hero_banner2.png'
import hero_banner3 from '@/assets/image/test-image.png'
import hero_banner2 from '@/assets/image/home-banner4.png'
import hero_bg from '@/assets/image/hero_bg.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
// import required modules
import { EffectCreative, Navigation } from 'swiper/modules';

export default function HeroBanner() {
    return (
        <>
            <div className='flex flex-col items-center justify-between max-w-6xl px-8 mx-auto lg:flex-row'>
                <aside className='flex-1 mt-10 text-center lg:text-left '>
                    <h1 className='md:w-[618px] text-4xl font-bold lg:tracking-tighter lg:text-7xl text-Dark-blue font-worksans'>Get your awesome sneakers.</h1>
                    <p className='font-medium leading-6 tracking-widest font-worksans mt-9 text-Granite-Gray'>We offer the best deals in our shop. Check them out now. We have awesome stuff on sale for you.</p>
                    <div className='mt-8'>
                        <button className='font-worksans leading-6 rounded w-[125px] h-14 bg-magenta text-white font-medium'>Shop Now</button>
                    </div>
                    <div className='relative flex'>
                        <div className=''>
                            Free shipping
                        </div>
                        <div>
                            Free returns
                        </div>
                    </div>
                </aside>




                <div className='relative w-full max-w-2xl home_img'>
                    <div className='absolute w-full h-full bg-center bg-no-repeat bg-contain ' style={{ backgroundImage: `url(${hero_bg.src})` }}></div>


                    <Swiper
                        spaceBetween={32}
                        loop={true}
                        grabCursor={true}
                        effect={'creative'}

                        creativeEffect={{
                            prev: {
                                translate: [-100, 0, -500],
                                opacity: 0
                            },
                            next: {
                                translate: [100, 0, -500],
                                opacity: 0
                            }
                        }}
                        navigation={{ nextEl: '.banner--next', prevEl: '.banner--prev' }}
                        modules={[EffectCreative, Navigation]}
                        className='relative home_swiper'

                    >
                        <SwiperSlide>
                            <article>
                                <Image src={hero_banner} className='h-[560px] relative right-[30px] object-contain -rotate-45 outline-none' alt='hero_banner' />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <Image src={hero_banner3} className='h-[560px] relative right-[30px] object-contain -rotate-45 outline-none' alt='hero_banner' />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <Image src={hero_banner2} className='h-[560px] relative right-[30px] object-contain -rotate-45 outline-none' alt='hero_banner' />
                            </article>
                        </SwiperSlide>
                        <div className='relative flex gap-3  -bottom-[7%] left-[15%] z-10'>
                            <button className='p-3 text-xl text-gray-600 border border-gray-600 rounded-full banner--prev'><AiOutlineArrowLeft /></button>
                            <button className='p-3 text-xl text-gray-600 border border-gray-600 rounded-full banner--next'><AiOutlineArrowRight /></button>
                        </div>

                    </Swiper>
                </div>

            </div></>
    )
}
