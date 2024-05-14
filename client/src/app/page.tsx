import Link from "next/link";
import Header from "./components/Header";
import { HeroSlider } from './components/Slider'
import Section_store from "./components/Section";
import SweaterSection from "./components/Section/sweater-section";
import Footer from "./components/Footer";





export default function Home() {
  return (
    <>
      <Header abs={false} />
      <HeroSlider />
      <Section_store />
      <section className="section section_pt0 section_pb0" style={{ backgroundImage: 'url(/img/bg-image-11.jpg)' }}>
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

      <SweaterSection />
      <Footer />
    </>
  )
}
