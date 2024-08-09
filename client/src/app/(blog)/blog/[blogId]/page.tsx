import Header from "@/app/components/Header"
import Gallery from "../components/gallery"
import Footer from "@/app/components/Footer"


export async function generateStaticParams() {
    const posts = await fetch('https://fakestoreapi.com/products').then((res) => res.json())


    return posts.map((post: any) => ({
        blogId: post.id.toString(),
    }))

}
export default function BlogDetail({ params }: any) {
    const { blogId } = params
    return (
        <>
            <Header hidden={false} />
            <div className="extheader-2" style={{ backgroundImage: 'url(/img/bg-image-23.jpg)' }}>
                <div className="container extheader-2-container"><a className="extheader-2-btn btn" href="#">
                    <svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
                        <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" />
                    </svg>
                    <span className="btn-span">Back</span></a>
                </div>
            </div>
            <section className="section">
                <div className="container section-container">
                    {/* text 6*/}
                    <div className="text-6">
                        <div className="text-6-col">
                            <div className="text-6-title title">Travel — I walked the entire length of Santa Monica and here Is what I found</div>{/* user*/}
                            <div className="text-6-user user">
                                <div className="user-preview"><img className="user-pic" src="/img/user-1.jpg" alt="User" /></div>
                                <div className="user-details">
                                    <div className="user-name">Valerie Turner</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-6-col">
                            {/* meta*/}
                            <div className="text-6-meta meta">
                                <div className="meta-category">Travel</div>
                                <div className="meta-date">Published January 26, 2019</div>
                            </div>
                            <div className="text-6-content content">
                                <p>Today’s article was supposed to be about New Zealand. For almost two months, the front page of my blog signaled to the wandering reader that this was “Carried Away Time”: Carrie was losing herself on the road, again, like every year before, during the summer season.</p>
                                <p>Today is Wednesday. Today is the day I was supposed to get back to normal. Blogging twice a week, catching up with other people’s writing, getting back to work. You know: whatever happens to you, however far you travel, no matter how many fantastic places and people you live, or however long your absence may be — when you’re back home, when you wake up jet-lagged the following morning, your spirit and your body proudly demonstrate their admirable and despicable ability to just go back to normal, to habits, to patterns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section_pt0 section_hidden">
                <div className="container section-container">
                    {/* gallery 2*/}
                    <div className="gallery-2 js-gallery-2">
                        <Gallery />
                        <div className="gallery-2-progress">
                            <div className="gallery-2-position js-gallery-2-position" />
                        </div>
                        <div className="gallery-2-pager"><span className="gallery-2-current js-gallery-2-current">01</span> — <span className="gallery-2-total js-gallery-2-total">05</span></div>
                    </div>
                </div>
            </section>
            <section className="section section_pt0">
                <div className="container section-container">
                    {/* text 18*/}
                    <div className="text-18">
                        <div className="text-18-col">
                            <div className="text-18-subtitle">Share Post</div>
                            <div className="text-18-socials socials socials_share socials_rounded"><a className="socials-item" href="#"><svg className="icon icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18">
                                <path d="M6.1 18V9.8h2.8l.4-3.2H6.1v-2c0-.9.3-1.6 1.6-1.6h1.7V.1C9 .1 8 0 6.9 0 4.4 0 2.8 1.5 2.8 4.2v2.4H0v3.2h2.8V18h3.3z" /></svg></a><a className="socials-item" href="#"><svg className="icon icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                                    <path d="M5.7 14.6c6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.2 1.8-1.9-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9C14.5.4 13.5 0 12.5 0c-2 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8C5.8 4.4 3.1 2.9 1.3.7.9 1.2.8 1.9.8 2.5c0 1.3.7 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.5h0C.7 7 2 8.5 3.7 8.8c-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.8 2.5 3.5 2.6-1.3 1-2.9 1.6-4.6 1.6-.3 0-.6 0-.9-.1 1.6 1 3.6 1.7 5.7 1.7" /></svg></a><a className="socials-item" href="#"><svg className="icon icon-more" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 18">
                                        <path d="M2 14a2 2 0 1 1 0 4 2 2 0 1 1 0-4zm0-7a2 2 0 1 1 0 4 2 2 0 1 1 0-4zm0-7a2 2 0 1 1 0 4 2 2 0 1 1 0-4z" /></svg></a></div>
                        </div>
                        <div className="text-18-col">
                            <div className="text-18-content content">
                                <p>But yesterday night, GMT+1, something beautiful happened. Something that shook my spirit and body and made another travel, a previous travel, emerge, come back to life. I got a comment from Abraham, Venice Beach, Los Angeles that stranger, whom I had met just for a few minutes five years ago, whose aura had impressed me, and about whom I had finally written a story, was getting back to me.</p>
                                <p>I went through a rollercoaster of contradictory emotions: skepticism, realization, happiness, guilt, elation, excitement, curiosity. I remember you, Abraham. Vividly. I remember your eyes and your hand shaking mine. I thought I had grasped at least a bit of who you were; enough to write an article about “all the rest”: the “you” that I had never got to know.</p>
                            </div>
                            <div className="text-18-quote">
                                <div className="text-18-title title">"A hilarious dark fantasy” —</div>
                                <div className="text-18-author">Booke Cagle</div>
                            </div>
                            <div className="text-18-content content">
                                <p>Yesterday night, all of a sudden, people shared that article. People from Venice. People who know you. Through them, this morning, I glimpsed a bit of “all the rest”: your art, your energy, your daily life, these people. That art, that music… You seem to be infused with it. And yet, I didn’t see any of it five years ago. Of course I didn’t: there I was, a goddam tourist with her goddam camera.</p>
                            </div>{/* links*/}
                            <div className="text-18-links links">
                                <div className="links-label label">Related Articles</div>
                                <div className="links-items">
                                    <div className="links-item"><a className="links-link" href="#">What to see in West Cost?</a></div>
                                    <div className="links-item"><a className="links-link" href="#">California: Rocks of Pfeiffer Beach</a></div>
                                    <div className="links-item"><a className="links-link" href="#">How to travel the world and get paid for it.</a></div>
                                </div>
                            </div>{/* tags*/}
                            <div className="text-18-tags tags"><a className="tags-item" href="#">travel</a><a className="tags-item" href="#">california</a><a className="tags-item" href="#">summer</a><a className="tags-item" href="#">west coast</a><a className="tags-item" href="#">world</a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section_pt0">
                <div className="container section-container container_sm">
                    {/* comment 2*/}
                    <div className="comment-2">
                        <div className="comment-2-title">Comments (26)</div>
                        <form className="comment-2-form">
                            {/* field*/}
                            <div className="field field_actions"><textarea className="field-textarea" placeholder="Write a Comment" required defaultValue={""} />
                                <div className="field-actions"><button className="field-btn btn btn_transparent" type="submit">Preview</button><button className="field-btn btn" type="submit">Submit</button></div>
                            </div>
                        </form>{/* reviews*/}
                        <div className="comment-2-reviews reviews">
                            <div className="reviews-item">
                                <div className="reviews-inner">
                                    <div className="reviews-head"><span className="reviews-user">Josh Gordon —</span> January 28, 2019</div>
                                    <div className="reviews-content content">Blogging twice a week, catching up with other people’s writing, getting back to work. You know: whatever happens to you, however far you travel, no matter how many places.</div>
                                </div>
                            </div>
                            <div className="reviews-item">
                                <div className="reviews-inner">
                                    <div className="reviews-head"><span className="reviews-user">Ashley Lardeau —</span> January 28, 2019</div>
                                    <div className="reviews-content content">I went through a rollercoaster of contradictory emotions: skepticism, realization, happiness, guilt, elation, excitement, curiosity. I remember you, Abraham. Vividly.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />


        </>
    )
}
