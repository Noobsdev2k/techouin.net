import Header from '@/app/components/Header'
import { ThumbSlider } from '@/app/components/Slider'
import React from 'react'
import StyleWith from './style-with'
import Footer from '@/app/components/Footer'

export async function generateStaticParams() {
    const posts = await fetch('https://fakestoreapi.com/products').then((res) => res.json())


    return posts.map((post: any) => ({
        id: post.id.toString(),
    }))

}
export default function DetailPage({ params }: any) {
    const { id } = params
    console.log(id);

    return (
        <>
            <Header hidden={false} />
            <div className="extheader-5 js-extheader-5">
                <div className="container extheader-5-container">
                    <ThumbSlider />
                    <div className="extheader-5-foot">
                        <a className="extheader-5-play play play_black" href="#" data-video="PYBmAzhTecU">
                            <div className="play-icon"><svg className="icon icon-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                                <path d="M1 18c-.17 0-.35-.04-.5-.13A1 1 0 0 1 0 17V1A1 1 0 0 1 .5.13a1 1 0 0 1 1 0l13.86 8a1 1 0 0 1 0 1.73l-13.86 8c-.15.1-.33.13-.5.13h0z" /></svg></div>
                            <div className="play-title">Play Video</div>
                        </a>
                        <div className="extheader-5-arrows arrows arrows_sm">
                            <button className="arrows-item js-extheader-5-prev">
                                <svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                    <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" /></svg>
                            </button>
                            <button className="arrows-item js-extheader-5-next">
                                <svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                    <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" />
                                </svg>
                            </button>
                        </div>
                        <div className="extheader-5-pager pager">
                            <div className="pager-number">01</div>
                            <div className='pager-dots js-extheader-5-dots'>
                                <ul className='slick-dots' />
                            </div>
                            <div className="pager-total js-extheader-5-total" />
                        </div>
                        <div className="extheader-5-actions"><a className="extheader-5-btn btn" href="#">Add to cart</a><a className="extheader-5-btn btn btn_transparent" href="#"><svg className="icon icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                            <path d="M16.4 1.6c2.1 2.1 2.1 5.5 0 7.5L9 16.5 1.6 9.1C-.5 7-.5 3.6 1.6 1.6 3.6-.5 6.9-.5 9 1.5c2.1-2 5.4-2 7.4.1zM15 7.7c1.3-1.3 1.3-3.4 0-4.7s-3.4-1.3-4.7 0L9 4.3 7.7 3C6.4 1.7 4.3 1.7 3 3S1.7 6.4 3 7.7l6 6 6-6z" /></svg></a></div>
                    </div>
                </div>
            </div>{/* section*/}
            <section className="section">
                <div className="container section-container container_md">
                    {/* text 25*/}
                    <div className="text-25">
                        <div className="text-25-col">
                            <div className="text-25-title title">Made of black technical knit fabric</div>
                            <div className="text-25-subtitle">Description</div>
                            <div className="text-25-content content">Running sneakers with thin elastic laces. Wavy rubber sole. Made of black technical knit fabric. The rubberized film details highlight the shape of the shoe. Customized with detachable rubber tab appliqué on the heel.</div>
                            <div className="text-25-subtitle">Composition</div>
                            <div className="text-25-content content">80% polyamide, 20% elastane, 100% calf leather, inside: 100% polyester</div>
                            <div className="text-25-socials socials socials_share socials_rounded"><a className="socials-item" href="#"><svg className="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18">
                                <path d="M6.1 18V9.8h2.8l.4-3.2H6.1v-2c0-.9.3-1.6 1.6-1.6h1.7V.1C9 .1 8 0 6.9 0 4.4 0 2.8 1.5 2.8 4.2v2.4H0v3.2h2.8V18h3.3z" /></svg></a><a className="socials-item" href="#"><svg className="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                    <path d="M5.7 14.6c6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.2 1.8-1.9-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9C14.5.4 13.5 0 12.5 0c-2 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8C5.8 4.4 3.1 2.9 1.3.7.9 1.2.8 1.9.8 2.5c0 1.3.7 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.5h0C.7 7 2 8.5 3.7 8.8c-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.8 2.5 3.5 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.9-.1 1.6 1 3.6 1.7 5.7 1.7" /></svg></a><a className="socials-item" href="#"><svg className="icon icon-more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 18">
                                        <path d="M2 14a2 2 0 1 1 0 4 2 2 0 1 1 0-4zm0-7a2 2 0 1 1 0 4 2 2 0 1 1 0-4zm0-7a2 2 0 1 1 0 4 2 2 0 1 1 0-4z" /></svg></a></div>
                        </div>
                        <div className="text-25-col">
                            {/* reviews*/}
                            <div className="reviews reviews_previews js-reviews">
                                <div className="reviews-title">Reviews</div>
                                <div className="reviews-slider js-reviews-slider">
                                    <div className="reviews-slide">
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-2.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Josh Gordon —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Blogging twice a week, catching up with other people’s writing, getting back to</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-3.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">I went through a rollercoaster of contradictory emotions: skepticism</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-1.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Realization, happiness, guilt, elation, excitement, curiosity. I remember you</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-slide">
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-2.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Josh Gordon —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Blogging twice a week, catching up with other people’s writing, getting back to</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-3.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">I went through a rollercoaster of contradictory emotions: skepticism</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-1.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Realization, happiness, guilt, elation, excitement, curiosity. I remember you</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-slide">
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-2.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Josh Gordon —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Blogging twice a week, catching up with other people’s writing, getting back to</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-3.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">I went through a rollercoaster of contradictory emotions: skepticism</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item">
                                            <div className="reviews-preview"><img className="reviews-pic" src="/img/user-1.jpg" alt="Image" /></div>
                                            <div className="reviews-inner">
                                                <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                                <div className="reviews-content content">Realization, happiness, guilt, elation, excitement, curiosity. I remember you</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-foot">
                                    <div className="reviews-arrows arrows arrows_sm"><button className="arrows-item js-reviews-prev"><svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                        <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" /></svg></button><button className="arrows-item js-reviews-next"><svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                                            <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></button></div>
                                    <div className="reviews-pager"><span className="reviews-current js-reviews-current">01</span> — <span className="reviews-total js-reviews-total" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StyleWith />
            <Footer />

        </>
    )
}
