import Link from "next/link";
import Header from "./components/Header";
import { HeroSlider } from './components/Slider'
import Section_store from "./components/Section";





export default function Home() {
  return (
    <>
     <Header />
     <HeroSlider/>
     <Section_store/>
     <section className="section section_pt0 section_pb0" style={{backgroundImage: 'url(img/bg-image-11.jpg)'}}>
      <div className="container section-container container_md">
    {/* ext header 4*/}
    <div className="extheader-4">
      <div className="extheader-4-col">
        <div className="extheader-4-caption">New in —</div>
        <div className="extheader-4-title title">Nike Flyknit</div>
      </div>
      <div className="extheader-4-col">
        <div className="extheader-4-actions"><a className="extheader-4-btn btn btn_stroke btn_white" href="#">About</a><a className="extheader-4-btn btn btn_white" href="#">Explore</a></div>
      </div>
    </div>
  </div>
</section>
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
        <div className="text-9-arrows arrows arrows_white arrows_bg"><button className="arrows-item js-text-9-prev"><svg className="icon icon-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
              <path d="M5 6.9c.4.4.4 1 0 1.4h0c-.4.4-1 .4-1.4 0L.3 5a1 1 0 0 1 0-1.4L3.6.3A1 1 0 0 1 5 .3h0a1 1 0 0 1 0 1.4L3.4 3.3H17a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1H3.4L5 6.9z" /></svg></button><button className="arrows-item js-text-9-next"><svg className="icon icon-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 9">
              <path d="M13 6.9c-.4.4-.4.9-.1 1.3l.1.1c.4.4 1 .4 1.4 0L17.7 5a1 1 0 0 0 0-1.4L14.4.3a1 1 0 0 0-1.3-.1l-.1.1a1 1 0 0 0 0 1.4l1.6 1.6H1a1 1 0 0 0-1 .9v.1a1 1 0 0 0 1 1h13.6L13 6.9z" /></svg></button></div>
        <div className="text-9-slider js-text-9-slider">
          <div className="text-9-slide"><img className="text-9-pic" src="img/image-45.jpg" alt="Image" /></div>
          <div className="text-9-slide"><img className="text-9-pic" src="img/image-46.jpg" alt="Image" /></div>
          <div className="text-9-slide"><img className="text-9-pic" src="img/image-45.jpg" alt="Image" /></div>
          <div className="text-9-slide"><img className="text-9-pic" src="img/image-46.jpg" alt="Image" /></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
